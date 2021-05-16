const path = require("path");
const Markdown = require("markdown-it");
const Image = require("@11ty/eleventy-img");
const HTMLMin = require("html-minifier");
const PostHTML = require("posthtml");
const MinifyInlineCSS = require("posthtml-minify-classnames");
const CleanCSS = require("clean-css");
const externalLinks = require("eleventy-plugin-external-links");

const markdown = new Markdown({
  html: true,
  breaks: false,
  linkify: false,
});

module.exports = function (eleventyConfig) {
  const isProduction = process.env.NODE_ENV === "production";

  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/styles");

  eleventyConfig.addLayoutAlias("base", "base.njk");

  eleventyConfig.setLibrary("md", markdown);
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: (file) => {
      file.excerpt = markdown.render(file.content);
    },
  });

  eleventyConfig.addPlugin(externalLinks);

  eleventyConfig.addTransform("htmlmin", async function (content, outputPath) {
    if (isProduction && outputPath && outputPath.endsWith(".html")) {
      const { html } = await PostHTML().use(MinifyInlineCSS()).process(content);
      return HTMLMin.minify(html, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
    }
    return content;
  });

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter("sortByOrder", (value) => {
    return value.sort((a, b) => a.data.order - b.data.order);
  });

  eleventyConfig.addFilter("filterFeaturing", (value) => {
    return value.filter((x) => !x.featuring);
  });

  eleventyConfig.addAsyncShortcode("image", async (src, alt, classes = "", widths = [600], sizes = []) => {
    if (!alt) {
      throw new Error(`Missing \`alt\` on image from: ${src}`);
    }

    const file = path.join("./src/images/", src);
    const extendedWidths = widths.flatMap((width) => [width, width * 2, width * 3]);
    const metadata = await Image(file, {
      widths: extendedWidths,
      formats: ["avif", "webp", "jpeg"],
      urlPath: "/images/",
      outputDir: "./dist/images/",
    });

    const data = metadata.jpeg[0];
    const sources = Object.values(metadata)
      .map((format) => {
        const typeAttr = `image/${format[0].format}`;
        const srcsetAttr = format.map((entry) => entry.srcset).join(", ");
        const sizesAttr = sizes.length > 0 ? `sizes="${sizes.join(", ")}"` : "";
        return `<source type="${typeAttr}" srcset="${srcsetAttr}" ${sizesAttr}>`;
      })
      .join("\n");

    return `<picture class="${classes}">
      ${sources}
        <img
          src="${data.url}"
          width="${data.width}"
          height="${data.height}"
          alt="${alt}"
          loading="lazy"
          decoding="auto"
         >
      </picture>`;
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      data: "data",
      layouts: "layouts",
    },
  };
};

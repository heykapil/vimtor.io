const path = require("path");
const Markdown = require("markdown-it");
const Image = require("@11ty/eleventy-img");
const HTMLMin = require("html-minifier");
const PostHTML = require("posthtml");
const MinifyInlineCSS = require("posthtml-minify-classnames");
const CleanCSS = require("clean-css");

const markdown = new Markdown({
  html: true,
  breaks: false,
  linkify: false,
});

module.exports = function (eleventyConfig) {
  const isProduction = process.env.NODE_ENV === "production";

  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/styles.css");

  eleventyConfig.setLibrary("md", markdown);
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: (file) => {
      file.excerpt = markdown.render(file.content);
    },
  });

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

  eleventyConfig.addNunjucksFilter("sortByOrder", (value) => {
    return value.sort((a, b) => a.data.order - b.data.order);
  });

  eleventyConfig.addNunjucksAsyncShortcode("image", async (src, alt, classes = "") => {
    if (!alt) {
      throw new Error(`Missing \`alt\` on image from: ${src}`);
    }

    const file = path.join("./src/images/", src);
    const metadata = await Image(file, {
      widths: [600],
      formats: ["webp", "jpeg"],
      urlPath: "./images/",
      outputDir: "./dist/images/",
    });

    const data = metadata.jpeg[0];
    const sources = Object.values(metadata)
      .map((format) => {
        return `<source type="image/${format[0].format}" srcset="${format.map((entry) => entry.srcset).join(", ")}">`;
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
          decoding="async"
         >
      </picture>`;
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      data: "data",
    },
  };
};

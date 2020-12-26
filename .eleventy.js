const path = require("path");
const Markdown = require("markdown-it");

const markdown = new Markdown({
  html: true,
  breaks: true,
  linkify: false,
});

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: (file, options) => {
      file.excerpt = markdown.render(file.content);
    },
  });

  eleventyConfig.setLibrary("md", markdown);

  eleventyConfig.addNunjucksFilter("sortByOrder", (value) => {
    return value.sort((a, b) => a.data.order - b.data.order);
  });

  eleventyConfig.addNunjucksAsyncShortcode("image", async (src, alt, classes) => {
    if (!alt) {
      throw new Error(`Missing \`alt\` on image from: ${src}`);
    }

    const url = path.join(`./images/`, src);
    // let metadata = await Image(src, {
    //   widths: [null],
    //   formats: ["jpeg"],
    //   urlPath: "/images/",
    //   outputDir: "./_site/images/",
    // });

    // let data = metadata.jpeg.pop();

    return `<img src="${url}" alt="${alt}" class="${classes}">`;
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};

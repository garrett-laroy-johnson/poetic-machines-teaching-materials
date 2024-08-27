// Note: You do not need to add markdown-it to package.json.
let markdown = require("markdown-it")({
  html: true,
});

const clean = require("eleventy-plugin-clean");

module.exports = function (eleventyConfig) {
  // Create the filter function.
  function sortByName(values) {
    let vals = values;
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
  }
  eleventyConfig.addNunjucksShortcode(
    "markdown",
    (content) => `<div class="md-block">${markdown.render(content)}</div>`
  );
  eleventyConfig.addPlugin(clean);
  eleventyConfig.addPassthroughCopy("src/assets/css/");
  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.addFilter("sortByName", sortByName);
  eleventyConfig.addPassthroughCopy("src/assets/img/");
  eleventyConfig.addWatchTarget("src/assets/img/");
  eleventyConfig.addPassthroughCopy("saic/ats3135/exhibition");
  eleventyConfig.addPassthroughCopy("*.css");
  eleventyConfig.addPassthroughCopy("src/assets/pdf/");
  eleventyConfig.addWatchTarget("src/assets/pdf/");
  eleventyConfig.addPassthroughCopy("src/assets/js/");
  eleventyConfig.addWatchTarget("src/assets/js/");
  eleventyConfig.addPassthroughCopy({
    "./node_modules/bootstrap/dist/js/bootstrap.bundle.js":
      "/assets/js/bootstrap.js",
  });
  eleventyConfig.addPassthroughCopy({
    "./node_modules/bootstrap/dist/css/bootstrap.min.css":
      "/assets/css/bootstrap.css",
  });

  eleventyConfig.addShortcode(
    "syllabusHeader",
    (course, instructor, time, term, location) =>
      `<div class="col-sm-6">
        <div class="py-2">
          <h1> ${course} </h1>
          <ul class="list-group">
            <li class="list-group-item">instructor: ${instructor}</li>
            <li class="list-group-item">time: ${time}</li>
            <li class="list-group-item">term: ${term}</li>
            <li class="list-group-item">location: ${location}</li>
          </ul>
        </div>`
  );

  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
};

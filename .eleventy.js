module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/css/");
  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.addPassthroughCopy({
    "./node_modules/bootstrap/dist/js/bootstrap.bundle.js":
      "/assets/js/bootstrap.js",
  });
  eleventyConfig.addPassthroughCopy({
    "./node_modules/bootstrap/dist/css/bootstrap.min.css":
      "/assets/css/bootstrap.css",
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    // Change to "/repo-name/" if deploying under a sub-path
    pathPrefix: "/ReproChallenge2026-test/"
  };
};

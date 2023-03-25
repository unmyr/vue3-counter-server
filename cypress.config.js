const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    fixturesFolder: "tests/e2e/fixtures",
    screenshotsFolder: "tests/e2e/screenshots",
    specPattern: "tests/e2e/specs/*.js",
    supportFile: "tests/e2e/support/index.js",
    videosFolder: "tests/e2e/videos",
  },
});

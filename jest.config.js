module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
  },
  collectCoverage: true,
};

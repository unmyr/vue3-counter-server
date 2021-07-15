module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  }
}

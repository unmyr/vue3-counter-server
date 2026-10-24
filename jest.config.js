module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': '<rootDir>/tests/unit/vue3-jest-transformer.js',
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  testMatch: ['**/tests/unit/**/*.(spec|test).(js|ts)'],
  collectCoverage: true,
};

/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports =  {
  // All imported modules in your tests should be mocked automatically
  // automock: true,

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  // collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of file extensions your modules use
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // A preset that is used as a base for Jest's configuration
  preset: "react-native",  // This preset includes all necessary Jest configuration for React Native

  // Automatically reset mock state before every test
  // resetMocks: false,

  // The root directory that Jest should scan for tests and modules within
  rootDir: "./",

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/__mocks__/@react-native-async-storage/async-storage.js'
  ],

  // The test environment that will be used for testing
  testEnvironment: "jest-environment-node",

  testPathIgnorePatterns: [
    '/node_modules/',
    '/android/',
    '/ios/'
  ],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [
    // "node_modules/(?!((jest-)?react-native|@react-native-cookies/cookies/|@testing-library/jest-native|react-native-elements|@react-native(-community)?)/)"
    "node_modules/(?!(@?react-navigation|@?react-native))"
  ]
};



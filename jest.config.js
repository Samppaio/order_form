module.export = {
  testPathIgnorePatterns: ["/node_modules"],
  setupFileAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts"
  ],
  transform: {
    "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest"
  },
  testEnviroment: "jsdom"
};
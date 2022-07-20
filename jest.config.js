const config = require("@wordpress/scripts/config/jest-unit.config.js");

module.exports = {
  ...config,
  setupFilesAfterEnv: ["./jest.setup.js"],
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/scripts/babel-transformer.js",
  },
};

const config = require("@wordpress/scripts/config/jest-unit.config.js");

module.exports = {
  ...config,
  setupFilesAfterEnv: ["./jest.setup.js"],
};

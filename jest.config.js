module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  transformIgnorePatterns: ['/node_modules', '/build/'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.[jt]sx?$': 'ts-jest',
  },
};

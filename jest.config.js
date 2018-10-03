module.exports = {
  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupFiles: ['<rootDir>/src/config/setup-tests.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: '(/__tests__/.*|\\.spec)\\.(js|jsx)$',
};

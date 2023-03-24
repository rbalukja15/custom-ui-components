module.exports = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  roots: ['src'],
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  moduleDirectories: ['src', 'assets', 'node_modules'],
  snapshotSerializers: [],
  moduleNameMapper: {
    'custom-ui-components': '<rootDir>/src',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileMock.ts',
    '\\.(css)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  setupFiles: [],
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
}

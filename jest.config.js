module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: { '\\.js$': ['babel-jest', { rootMode: 'upward' }] },
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  snapshotSerializers: [],
  testURL: 'http://localhost/',
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  testRegex: '\\.test\\.(js)$',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
};

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: './tests/.+\\.test\\.ts$',
  coverageDirectory: './coverage',
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{ts,js}'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
}
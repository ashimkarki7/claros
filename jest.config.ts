export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  // collectCoverageFrom: ['src/**/*.{ts,jsx,tsx}', '!src/pages/EmployerHome/component'],
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['src/pages/HomePage/component'],
  coveragePathIgnorePatterns: ['src/pages/HomePage/component'],
  // 'ts-jest': {
  //   diagnostics: {
  //     exclude: ['**']
  //   }
  // },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  rootDir: './',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
  },
  setupFiles: ['<rootDir>/jest.setup.ts'],
};

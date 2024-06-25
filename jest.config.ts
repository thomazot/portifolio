import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './src/'
})

const config: Config = {
  verbose: true,
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/@types/**/*.ts(x)?',
    '!src/configs/**/*.ts(x)?',
    '!src/**/*.stories.ts(x)?',
    '!src/**/*(layout|page|loading|not-fount|error|global-error|route|template|default).ts(x)?'
  ],
  testPathIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      lines: 80
    }
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  }
}

export default createJestConfig(config)

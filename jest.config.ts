import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './src/'
})

const config: Config = {
  verbose: true,
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  }
}

export default createJestConfig(config)

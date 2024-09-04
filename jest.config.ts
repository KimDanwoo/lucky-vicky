import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  moduleDirectories: ['node_modules', '<rootDir>/page'], // 여기서 'page' 사용
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/page/$1', // 'page'와 맞춤
    '^utils/(.*)$': '<rootDir>/page/shared/utils/$1',
    '^components/(.*)$': '<rootDir>/page/shared/components/$1',
    '^services/(.*)$': '<rootDir>/page/shared/services/$1',
    '^assets/(.*)$': ['<rootDir>/page/shared/assets/$1'],
    '^constants/(.*)$': ['<rootDir>/page/shared/constants/$1'],
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
}

export default createJestConfig(config)

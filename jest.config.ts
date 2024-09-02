import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleDirectories: ['node_modules', '<rootDir>/page'], // 여기서 'page' 사용
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/page/$1', // 'page'와 맞춤
    '^@utils/(.*)$': '<rootDir>/page/lib/utils/$1', // 필요한 경로로 수정
    '^@components/(.*)$': '<rootDir>/page/lib/components/$1', // 필요한 경로로 수정
    '^@services/(.*)$': '<rootDir>/page/lib/services/$1', // 필요한 경로로 수정
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
}

export default createJestConfig(config)

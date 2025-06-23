// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      // 👇 Dis à ts-jest d’utiliser le bon tsconfig
      tsconfig: 'tsconfig.app.json'
    }
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // facultatif
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy' // si tu utilises CSS Modules
  },
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)']
};

export default config;

module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  moduleNameMapper: {
    '@/tests/(.+)': '<rootDir>/tests/$1',
    '@/(.+)': '<rootDir>/src/$1',
    '\\.(css|sass|scss)$': 'identity-obj-proxy'
  },
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testPathIgnorePatterns: [
    '/node_modules/', '/.next/'
  ],
  setupFilesAfterEnv: ['<rootDir>/src/main/config/jest-setup.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/main/config/fileTransformer.js'
  },
  testEnvironment: 'jsdom',
  clearMocks: true
}

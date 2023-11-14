module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
    },
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@root', './src'],
          ['@db', './src/db'],
          ['@models', './src/db/models'],
          ['@interfaces', './src/common/interfaces'],
          ['@storage', './src/storage'],
          ['@services', './src/services'],
          ['@middlewares', './src/api/middlewares'],
        ],
        extensions: ['.ts', '.js', '.json'],
      },
    },
  },
  overrides: [
    {
      files: ['src/**/*.js', 'src/**/*.ts'],
      rules: {
        'max-len': ['error', { code: 120 }],
        complexity: ['error', { max: 10 }],
        'no-console': 'off',
        'import/extensions': ['error', 'ignorePackages', {
          js: 'never',
          ts: 'never',
        }],
      },
    },
  ],
  env: {
    mocha: true,
  },
};

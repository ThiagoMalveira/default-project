module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    cmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'prettier', 'import', '@typescript-eslint', 'react-hooks'],
  rules: {
    'jsx-a11y/href-no-hash': 'off',
    'no-unused-vars': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-empty-function': ['error'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        types: ['boolean', 'string', 'number', 'array'],
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'forbid',
      },
      {
        selector: 'variable',
        types: ['function'],
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'forbid',
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'forbid',
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'forbid',
      },
    ],

    'react/react-in-jsx-scope': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    radix: ['error', 'as-needed'],
    semi: 'off',
    'react-hooks/rules-of-hooks': 'off', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
}

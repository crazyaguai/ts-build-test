module.exports = {
  env: {
    browser: true,
    es2020: true,
    // es6: true,
  },
  globals: {
    c1: true, // ？？？
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    // ecmaVersion: 6,
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    indent: ['error', 2],
    'no-console': ['off'],
  },
};

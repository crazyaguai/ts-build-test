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
    'prettier',
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
    'linebreak-style': [0, 'error', 'windows'], // 换行配置 windows \r\n linux \n

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
};

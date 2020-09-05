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
    'eslint-config-airbnb-base',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'eslint-config-prettier',
    // "eslint-config-airbnb-typescript",
    // "eslint-config-prettier/@typescript-eslint",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    // ecmaVersion: 6,
  },
  plugins: [
    'eslint-plugin-import',
    '@typescript-eslint',
    'eslint-plugin-react',
  ],

  settings: {
    'import/extensions': ['.tsx', '.ts', '.jsx', '.js'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    indent: ['error', 2],
    'no-console': ['off'],
    'linebreak-style': [0, 'error', 'windows'], // 换行配置 windows \r\n linux \n

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],

    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

    'import/extensions': ['off'],
  },
}

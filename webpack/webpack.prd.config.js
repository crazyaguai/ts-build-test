const path = require('path')
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const reactVendorConfig = require('./dll/reactVendor-manifest.json')

const baseWebpackConfig = require('./webpack.base.config')

const prdWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: [
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '../'), // 根路径
      manifest: reactVendorConfig,
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}', // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
      },
    }),
  ],
})

module.exports = prdWebpackConfig

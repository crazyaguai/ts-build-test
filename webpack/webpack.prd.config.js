const path = require('path')
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const reactVendorConfig = require('./dll/reactVendor-manifest.json')

const baseWebpackConfig = require('./webpack.base.config')

const prdWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: [
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '../'), // 根路径
      manifest: reactVendorConfig,
    }),
  ],
})

module.exports = prdWebpackConfig

const {merge} = require('webpack-merge')

const baseWebpackConfig = require('./webpack.base.config')

const prdWebpackConfig = merge(baseWebpackConfig,{
  mode: 'production'
})

module.exports = prdWebpackConfig
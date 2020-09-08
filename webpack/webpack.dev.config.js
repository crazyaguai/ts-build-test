const { merge } = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')

const reactVendorConfig = require('./dll/reactVendor-manifest.json')

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    clientLogLevel: 'warning',

    hot: true,
    contentBase: false, // 使用CopyWebpackPlugin, 所以这里不需要
    compress: true,
    host: '0.0.0.0',
    port: 4000,
    https: false,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    }, // 是否显示编译错误
    publicPath: '/',
    // proxy: [
    //   {
    //     context: ['/api'],
    //     target: 'http://127.0.0.1:6666',
    //     changeOrigin: true,
    //     logLevel: 'debug',
    //   }
    // ],
    quiet: false, // 使用FriendlyErrorsPlugin报错，所以把原生的报错关了
    watchOptions: {
      poll: false,
    },
  },
  optimization: {
    noEmitOnErrors: true,
    namedModules: true, // 热更新显示文件名
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('webpack/template/index.html'),
      inject: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../static'),
          to: 'static',
        },
        // {
        //   from: path.resolve(__dirname, '../favicon.ico'),
        //   to: ''
        // }
      ],
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './app/**/*.{ts,tsx,js,jsx}', // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
      },
    }),

    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '../'), // 根路径
      manifest: reactVendorConfig,
    }),

    new webpack.HotModuleReplacementPlugin(),
  ],
})

module.exports = devWebpackConfig

const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const config = require('./config')

const reactVendor = ['react', 'react-dom']

const entry = {
  reactVendor,
}

const webpackConfig = {
  context: path.join(__dirname, '../'), // 根路径
  mode: 'production',
  entry,
  output: {
    path: path.join(__dirname, '../static/js/dll'),
    filename: '[name].[hash:6].js',
    library: '[name]_[hash]',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', 'tsx'],
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  optimization: {
    minimizer: [
      // 压缩js
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
        },
        sourceMap: false,
        parallel: true,
      }),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),

    // 保持chunkId不变
    new webpack.NamedChunksPlugin(),
    // 保持moduleID稳定
    new webpack.HashedModuleIdsPlugin(),
    // 提升作用域
    new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.DllPlugin({
      path: path.join(__dirname, 'dll/[name]-manifest.json'),
      name: '[name]_[hash]',
    }),
    /* 忽略moment的本地文件 */
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
}

// 如果带--report参数，则分析模块
// if (config.build.bundleAnalyzerReport) {
//   const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
//   webpackConfig.plugins.push(new BundleAnalyzerPlugin())
// }

module.exports = webpackConfig

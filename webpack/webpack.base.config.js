const path = require('path')

function resolve(dir){
  return path.resolve(__dirname, '..', dir)
}

const baseConfig = {
  entry: {
    index: resolve('app/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
}

module.exports = baseConfig
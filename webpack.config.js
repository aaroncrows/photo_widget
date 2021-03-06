const join = require('path').join
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const paths = {
  entry: join(__dirname, '/src/index.js'),
  build: join(__dirname, '/build/')
}

module.exports = {
  entry: paths.entry,
  output: {
    path: paths.build,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: './node_modules/',
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ExtractTextPlugin('style.css')
  ]
}

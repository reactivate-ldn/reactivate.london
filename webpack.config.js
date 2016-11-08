/*eslint-disable */
var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HappyPack = require('happypack')

var PRODUCTION = process.env.NODE_ENV === 'production'

if (!PRODUCTION) {
  require('dotenv').config({ silent: true })
}

var replace = {};
for (var key in process.env) {
  if (process.env.hasOwnProperty(key)) {
    replace["process.env." + key] = '"' + process.env[key] + '"';
  }
}

var plugins = [
  new ExtractTextPlugin('styles.css'),
  new webpack.DefinePlugin(replace)
]

var productionPlugins = [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    minimize: true,
    compress: {
      warnings: false
    }
  })
]

var developmentPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new HappyPack({
    verbose: false,
    threads: 4,
    loaders: ['babel-loader']
  })
]

var rules = [{
  test: /\.jsx?$/,
  loader: PRODUCTION ? 'babel-loader' : 'happypack/loader',
  include: path.join(__dirname, 'src', 'client'),
  exclude: /node_modules/
}, {
  test: /\.css$/,
  loader: ExtractTextPlugin.extract({
    fallbackLoader: 'style-loader',
    loader: {
      loader: 'css-loader',
      query: {
        minimize: PRODUCTION
      }
    }
  })
}]

module.exports = {
  cache: !PRODUCTION,
  resolve: {
    extensions: [ '.js' ]
  },
  entry: [ './src/client/index' ],
  devtool: 'source-map',
  plugins: plugins
    .concat(PRODUCTION ? productionPlugins : developmentPlugins),
  module: {
    rules: rules
  },
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  }
}


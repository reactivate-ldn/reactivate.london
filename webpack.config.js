/*eslint-disable */
var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OfflinePlugin = require('offline-plugin')
var HappyPack = require('happypack')

var PRODUCTION = process.env.NODE_ENV === 'production'

if (!PRODUCTION) {
  require('dotenv').config({ silent: true })
}

var env = {};
for (var key in process.env) {
  if (process.env.hasOwnProperty(key)) {
    env[key] = JSON.stringify(process.env[key])
  }
}

var plugins = [
  new ExtractTextPlugin('styles.css'),
  new webpack.DefinePlugin({
    'process.env': env
  })
]

var productionPlugins = [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    minimize: true,
    compress: {
      warnings: false
    }
  }),
  new OfflinePlugin()
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
}, {
  test: /\.svg$/,
  loader: 'svg-inline-loader'
}, {
  test: /\.json$/,
  loader: 'json-loader'
}]

module.exports = {
  cache: !PRODUCTION,
  resolve: {
    extensions: [ '.js' ]
  },
  entry: [ './src/client/index' ],
  devtool: PRODUCTION ? 'cheap-module-source-map' : 'source-map',
  plugins: plugins
    .concat(PRODUCTION ? productionPlugins : developmentPlugins),
  module: {
    rules: rules
  },
  performance: {
    hints: PRODUCTION ? 'warning' : false
  },
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  }
}


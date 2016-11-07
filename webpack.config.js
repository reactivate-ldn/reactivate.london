/*eslint-disable */
var webpack = require('webpack')
var path = require('path')

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

var plugins = [ new webpack.DefinePlugin(replace) ]

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
  new webpack.HotModuleReplacementPlugin()
]

var rules = [{
  test: /\.jsx?$/,
  loader: 'babel-loader',
  include: path.join(__dirname, 'src'),
  exclude: /node_modules/
}, {
  test: /\.css$/,
  use: [{
    loader: 'style-loader'
  }, {
    loader: 'css-loader',
    options: {
      minimize: PRODUCTION
    }
  }]
}]

module.exports = {
  cache: !PRODUCTION,
  resolve: {
    extensions: [ '.js' ]
  },
  entry: [ './src/index' ],
  devtool: 'source-map',
  plugins: plugins
    .concat(PRODUCTION ? productionPlugins : developmentPlugins),
  module: {
    rules: rules
  },
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
    publicPath: '/static/'
  }
}


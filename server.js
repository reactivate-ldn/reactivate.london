var WebpackDevServer = require('webpack-dev-server')
var webpack = require('webpack')
var config = require('./webpack.config')

var PRODUCTION = process.env.NODE_ENV === 'production'
var PORT = process.env.PORT || 8080

config.watch = true
config.entry = PRODUCTION ? config.entry : [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:' + PORT,
  'webpack/hot/only-dev-server'
].concat(config.entry)

var compiler = webpack(config)
var server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,

  hot: !PRODUCTION,
  historyApiFallback: true,
  noInfo: false,
  quiet: false,
  stats: {
    version: true,
    timings: true,
    modules: false,
    errorDetails: true,
    chunkModules: false,
    colors: true
  }})

server.listen(PORT, 'localhost', function() {
  console.log('☕️  Server is listening on localhost:' + PORT);
})

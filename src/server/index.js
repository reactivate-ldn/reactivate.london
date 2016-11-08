import express from 'express'
import { join } from 'path'
import webpackMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../../webpack.config'
import webpack from 'webpack'
import renderHtml from './htmlRenderer'

import { createElement } from 'react'
import App from '../client/app'

const PRODUCTION = process.env.NODE_ENV === 'production'
const PORT = process.env.PORT || 8080
const PATH = join(__dirname, '../../static')

const app = express()

app.use('/static', express.static(PATH))

if (!PRODUCTION) {
  webpackConfig.watch = true
  webpackConfig.entry = [
    'react-hot-loader/patch',
    `webpack-hot-middleware/client?path=http://localhost:${PORT}/__webpack_hmr?reload=false`,
    'webpack/hot/only-dev-server'
  ].concat(webpackConfig.entry)

  const compiler = webpack(webpackConfig)

  app.use(webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    noInfo: false,
    quiet: false,
    stats: {
      version: true,
      timings: true,
      modules: false,
      errorDetails: true,
      chunkModules: false,
      colors: true
    }
  }))

  app.use(hotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }))
}

app.get('*', (req, res) => {
  const page = renderHtml(PRODUCTION ? createElement(App) : undefined)
  res.status(200).send(page)
})

app.listen(PORT, 'localhost', err => {
  if (err) {
    throw err
  }

  console.log('☕️  Server is listening on localhost:' + PORT);
})


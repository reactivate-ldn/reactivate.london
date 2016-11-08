import express from 'express'
import { join } from 'path'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../../webpack.config'
import webpack from 'webpack'
import renderHtml from './htmlRenderer'

import App from '../client/app'

const PRODUCTION = process.env.NODE_ENV === 'production'
const PORT = process.env.PORT || 8080
const PATH = join(__dirname, '../../static')

const app = express()

if (PRODUCTION) {
  app.use('/static', express.static(PATH))
} else {
  webpackConfig.watch = true
  webpackConfig.entry = [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=http://localhost:' + PORT,
    'webpack/hot/only-dev-server'
  ].concat(webpackConfig.entry)

  app.use(webpackMiddleware(webpack(webpackConfig), {
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
}

app.get('*', (req, res) => {
  const page = renderHtml(PRODUCTION ? <App/> : undefined)
  res.status(200).send(page)
})

app.listen(PORT, 'localhost', err => {
  if (err) {
    throw err
  }

  console.log('☕️  Server is listening on localhost:' + PORT);
})


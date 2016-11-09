import { watchFile } from 'fs'
import express from 'express'
import { join } from 'path'
import webpackMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../../webpack.config'
import webpack from 'webpack'
import renderHtml from './htmlRenderer'
import WriteFilePlugin from 'write-file-webpack-plugin'

import { createElement } from 'react'

const PRODUCTION = process.env.NODE_ENV === 'production'
const PORT = process.env.PORT || (process.env.PORT = 8080)
const PATH = join(__dirname, '../../static')
const SERVER_BUNDLE = join(PATH, 'bundle.js')

let bundleValid
let bundle

const app = express()

app.use('/static', express.static(PATH))

if (PRODUCTION) {
  bundle = require(SERVER_BUNDLE)
} else {
  webpackConfig.watch = true
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new WriteFilePlugin({
      test: /^bundle\.js$/,
      log: false,
      force: true
    })
  ])

  const compiler = webpack(webpackConfig)
  const webpackMiddlewareInstance = webpackMiddleware(compiler, {
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
  })

  app.use(webpackMiddlewareInstance)

  app.use(hotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }))

  function updateBundle() {
    if (bundle) {
      delete require.cache[require.resolve(SERVER_BUNDLE)]
    }

    bundle = require(SERVER_BUNDLE)
  }

  // Add watcher for bundle changes
  bundleValid = new Promise(resolve => {
    webpackMiddlewareInstance.waitUntilValid(() => {
      updateBundle()
      resolve()
    })
  })

  bundleValid.then(() => {
    watchFile(SERVER_BUNDLE, () => {
      updateBundle()
    })
  })
}

const respond = res => res.status(200).send(renderHtml(global.getBundle))

app.get('*', (req, res) => {
  try {
    if (bundleValid) {
      bundleValid.then(() => {
        respond(res)
      })
    } else {
      respond(res)
    }
  } catch (err) {
    res.status(500).send(err.message ? err.message : err)
  }
})

app.listen(PORT, 'localhost', err => {
  if (err) {
    throw err
  }

  console.log(`\n☕  Hooray! The server is running. Navigate to http://localhost:${PORT} to access it.\n`);
})


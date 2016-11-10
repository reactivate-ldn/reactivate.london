import { config } from 'dotenv'
import { readFileSync, watchFile } from 'fs'
import express from 'express'
import { join } from 'path'
import webpackMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../../webpack.config'
import webpack from 'webpack'
import renderHtml from './htmlRenderer'
import renderError from './errorRenderer'
import noRenderer from './noRenderer'
import DiskPlugin from 'webpack-disk-plugin'

import { createElement } from 'react'

config({ silent: true }) // dotenv

const PRODUCTION = process.env.NODE_ENV === 'production'
const PORT = process.env.PORT || (process.env.PORT = 8080)
const NOSSR = !!process.env.NOSSR
const PATH = join(__dirname, '../../static')
const SERVER_BUNDLE = join(PATH, 'bundle.js')

const loadStaticCSS = () => readFileSync(join(PATH, 'styles.css'))

let bundleValid
let bundle
let head = '<link rel="stylesheet" type="text/css" href="/static/styles.css"/>'

const app = express()

app.use('/static', express.static(PATH))

if (PRODUCTION) {
  bundle = require(SERVER_BUNDLE)
  head = `<style type="text/css">${loadStaticCSS()}</style>`
} else {
  webpackConfig.watch = true
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new DiskPlugin({
      output: {
        path: PATH
      },
      files: [
        { asset: "bundle.js" }
      ]
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
  bundleValid = new Promise((resolve, reject) => {
    webpackMiddlewareInstance.waitUntilValid(() => {
      try {
        updateBundle()
        resolve()
      } catch (err) {
        reject(err)
      }
    })
  })

  bundleValid.then(() => {
    watchFile(SERVER_BUNDLE, () => {
      updateBundle()
    })
  })
}

const respondWithPage = res => res.status(200).send(renderHtml(global.getBundle, head))
const respondWithStatic = res => res.status(200).send(noRenderer(head))
const respondWithError = (res, error) => res.status(500).send(renderError(error))

app.get('*', (req, res) => {
  if (NOSSR) {
    return respondWithStatic(res)
  }

  (bundleValid || Promise.resolve())
    .then(() => {
      respondWithPage(res)
    })
    .catch(err => {
      try {
        respondWithError(res, err)
      } catch (err) {
        console.error(err)
        res.status(500).send(err.message ? err.message : err)
      }
    })
})

app.listen(PORT, err => {
  if (err) {
    throw err
  }

  console.log(`\n☕  Hooray! The server is running. Navigate to http://localhost:${PORT} to access it.\n`);
})


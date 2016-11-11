import 'sanitize.css/sanitize.css'
import './main.css'

if (typeof document === 'object') {
  require('native-promise-only')

  if (process.env.NODE_ENV === 'production') {
    require('./entry/prod')
  } else {
    const PORT = process.env.PORT

    // NOTE: Queries for webpack-hot-middleware/client
    document.__resourceQuery = {
      path: `http://localhost:${PORT}/__webpack_hmr`,
      reload: false
    }

    require('react-hot-loader/patch')
    require('webpack-hot-middleware/client')
    require('webpack/hot/only-dev-server')

    require('./entry/dev')
  }
} else if (typeof global === 'object') {
  global.getBundle = function getBundle() {
    const StyleSheet = require('styled-components-stylesheet')
    const App = require('./containers/app').default

    return { App, StyleSheet }
  }
}


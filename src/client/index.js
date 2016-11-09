import 'sanitize.css/sanitize.css'
import './main.css'

if (typeof document === 'object') {
  if (process.env.NODE_ENV === 'production') {
    require('./entry/prod')
  } else {
    require('./entry/dev')
  }
} else if (typeof global === 'object') {
  global.getBundle = function getBundle() {
    const StyleSheet = require('styled-components-stylesheet')
    const App = require('./containers/app').default

    return { App, StyleSheet }
  }
}


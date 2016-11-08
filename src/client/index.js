import 'sanitize.css/sanitize.css'
import './main.css'

if (typeof document === 'object') {
  if (process.env.NODE_ENV === 'production') {
    require('./entry/prod')
  } else {
    require('./entry/dev')
  }
} else if (typeof global === 'object') {
  global.getApp = function getApp() {
    return require('./containers/app').default
  }
}


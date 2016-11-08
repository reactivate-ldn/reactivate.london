import 'sanitize.css/sanitize.css'
import './main.css'

let entry
if (process.env.NODE_ENV === 'production') {
  entry = require('./entry/prod')
} else {
  entry = require('./entry/dev')
}

module.exports = entry

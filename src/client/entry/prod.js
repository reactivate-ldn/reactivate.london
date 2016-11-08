import React from 'react'
import { render } from 'react-dom'

import App from '../containers/app'

function start() {
  const root = document.getElementById('root')
  render(<App/>, root)
}

module.exports = start


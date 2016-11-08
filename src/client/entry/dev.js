import React from 'react'
import { render } from 'react-dom'

import { AppContainer } from 'react-hot-loader'
import Redbox from 'redbox-react'

import App from '../containers/app'

function start() {
  function entry() {
    const root = document.getElementById('root')

    render((
      <AppContainer errorReporter={Redbox}>
        <App/>
      </AppContainer>
    ), root)
  }

  entry()

  if (module.hot) {
    module.hot.accept('../containers/app', () => {
      // NOTE: Circumvent webpack only considering modules accepted after a require
      const NewApp = require('../containers/app')

      entry()
    })
  }
}

module.exports = start


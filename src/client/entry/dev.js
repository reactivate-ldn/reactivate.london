import React from 'react'
import { render } from 'react-dom'

import { AppContainer } from 'react-hot-loader'
import Redbox from 'redbox-react'

import { Router, browserHistory } from 'react-router'
import routes from '../routes'

function entry(appRoutes) {
  const root = document.getElementById('root')

  render((
    <AppContainer errorReporter={Redbox}>
      <Router routes={appRoutes} history={browserHistory}/>
    </AppContainer>
  ), root)
}

entry(routes)

if (module.hot) {
  module.hot.accept('../routes', () => {
    // NOTE: Circumvent webpack only considering modules accepted after a require
    const newRoutes = require('../routes').default

    entry(newRoutes)
  })
}


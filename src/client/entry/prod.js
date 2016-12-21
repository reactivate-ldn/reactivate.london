import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

import routes from '../routes'

const root = document.getElementById('root')

render((
  <Router routes={routes} history={browserHistory}/>
), root)


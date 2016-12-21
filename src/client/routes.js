import React from 'react'
import { IndexRoute, Route } from 'react-router'

import Root from '../client/containers/root'
import App from '../client/containers/app'

const routes = (
  <Route path='/' component={Root}>
    <IndexRoute component={App}/>
  </Route>
)

export default routes

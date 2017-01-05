import React from 'react'
import { IndexRoute, Route } from 'react-router'

import Root from '../client/containers/root'
import App from '../client/containers/app'
import PastSpeakers from '../client/containers/past-speakers'

const routes = (
  <Route path='/' component={Root}>
    <IndexRoute component={App}/>
    <Route path='past-speakers' component={PastSpeakers}/>
  </Route>
)

export default routes

import React from 'react'
import { match, RouterContext } from 'react-router'

import createHtmlRenderer from './htmlRenderer'
import renderError from './errorRenderer'

const renderRoute = (bundle, head) => (req, res) => {
  const { Routes } = bundle

  match({
    routes: Routes,
    location: req.url
  }, (error, redirectLocation, renderProps) => {
    if (error) {
      return res.status(500).send(renderError(error))
    } else if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const renderer = createHtmlRenderer(bundle, <RouterContext {...renderProps}/>)

      return res.status(200).send(renderer(head))
    }

    return res.status(404).send(renderError(new Error('404 Not Found')))
  })
}

export default renderRoute

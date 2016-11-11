import { createElement } from 'react'
import { renderToString } from 'react-dom/server'

const renderHtml = (getBundle, appendHead) => {
  const { App, StyleSheet } = getBundle()

  let html
  try {
    html = renderToString(createElement(App))
  } catch(err) {
    console.error('Error on renderToString:', err)
    throw new Error(err)
  }

  const css = StyleSheet.rules().map(rule => rule.cssText).join('\n')

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Reactivate London</title>

        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">

        <meta name="author" content="Reactivate London">
        <meta name="description" content="A brand new meetup for all things React, JavaScript and Functional (Reactive) Programming!">
        <meta name="keywords" content="reactivate,london,meetup,react,javascript,frp">
        <meta name="application-name" content="Reactivate London">

        ${appendHead}
        <style type="text/css">${css}</style>
      </head>
      <body>
        <div id="root">${html}</div>
        <script type="text/javascript" async src="/static/bundle.js"></script>
      </body>
    </html>
  `
}

export default renderHtml

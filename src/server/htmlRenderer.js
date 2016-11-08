import { renderToString } from 'react-dom/server'
import styleSheet from 'styled-components/lib/models/StyleSheet'

const renderHtml = renderToString => {
  const {
    html,
    css
  } = renderToString()

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Futuractive London</title>

        <meta charset="UTF-8">
        <meta name="description" content="A brand new meetup for all things React, JavaScript and Functional (Reactive) Programming!">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">

        <link rel="stylesheet" type="text/css" href="/static/styles.css"/>
        ${css ? `<style type="text/css">${css}</style>` : ''}
      </head>
      <body>
        <div id="root">${html}</div>
        <script type="text/javascript" src="/static/bundle.js"></script>
        <script type="text/javascript">
          document.addEventListener("DOMContentLoaded", function() {
            render()
          })
        </script>
      </body>
    </html>
  `;
}

export default renderHtml

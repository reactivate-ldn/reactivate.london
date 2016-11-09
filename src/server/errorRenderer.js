import { createElement } from 'react'
import Redbox from 'redbox-react'
import { renderToString } from 'react-dom/server'

const renderError = error => {
  let html
  try {
    html = renderToString(createElement(Redbox, { error }))
  } catch(err) {
    throw new Error(err)
  }

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Unexpected Error</title>
      </head>
      <body>
        <div id="root">
          ${html}
        </div>
      </body>
    </html>
  `
}

export default renderError

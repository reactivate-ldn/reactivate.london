const noRenderer = appendHead => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Reactivate London</title>
        <meta charset="UTF-8">
        <meta name="description" content="A brand new meetup for all things React, JavaScript and Functional (Reactive) Programming!">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">

        ${appendHead}
      </head>
      <body>
        <div id="root"></div>
        <script type="text/javascript" src="/static/bundle.js"></script>
      </body>
    </html>
  `
}

export default noRenderer

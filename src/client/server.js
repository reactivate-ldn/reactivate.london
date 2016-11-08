import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import App from './containers/app'
import styleSheet from 'styled-components/lib/models/StyleSheet'

function render() {
  if (!styleSheet.sheet) {
    styleSheet.sheet = {}
  }

  styleSheet.flush()

  const html = renderToString(createElement(App))
  const css = styleSheet.rules().map(rule => rule.cssText).join('\n')

  return {
    html,
    css
  }
}

module.exports = render


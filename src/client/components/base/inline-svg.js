import React, { Component } from 'react'

const InlineSVG = src => {
  return class InlineSVG extends Component {
    render() {
      const { height, width } = this.props;
      let attr = ''

      if (height) {
        attr += ` height="${height}"`
      }

      if (width) {
        attr += ` width="${width}"`
      }

      let __html = src
      if (attr) {
        __html = __html.replace('<svg ', `<svg${attr} `)
      }

      return (
        <div {...this.props} dangerouslySetInnerHTML={{
          __html
        }}/>
      )
    }
  }
}

export default InlineSVG


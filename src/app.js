import 'sanitize.css/sanitize.css'
import './main.css'

import React, { Component, PropTypes } from 'react'
import Cover from './cover';

export default class App extends Component {
  render() {
    return (
      <div>
        <Cover/>
      </div>
    )
  }
}

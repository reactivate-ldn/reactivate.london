import React, { Component, PropTypes } from 'react'

import Cover from '../components/cover'
import Timeline from '../components/timeline'
import Speakers from '../components/speakers'
import Sponsors from '../components/sponsors'
import Footer from '../components/footer'
import Container from '../components/base/container'

export default class App extends Component {
  render() {
    return (
      <div>
        <Cover/>
        <Timeline/>
        <Speakers/>
        <Sponsors/>
        <Footer/>
      </div>
    )
  }
}

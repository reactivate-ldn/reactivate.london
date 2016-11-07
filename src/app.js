import React, { Component, PropTypes } from 'react'

import 'sanitize.css/sanitize.css'
import './main.css'

import Container from './components/container'
import Section from './components/section'
import Header1 from './components/h1'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Section>
          <Header1>The Futuractive London Meetup</Header1>
        </Section>
      </Container>
    )
  }
}


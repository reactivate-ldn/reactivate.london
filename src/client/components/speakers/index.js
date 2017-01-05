import React from 'react'
import styled from 'styled-components'

import Headline from '../base/headline'
import Strip from '../base/strip'
import Container from '../base/container'

import Contact from './contact'
import Row from './row'
import SpeakersItem from './item'

/*
 * avatar: url
 * link: url
 * name,
 * title,
 * text
 * [tba]
 * [free]
 */
const data = [
  {
    tba: true
  },
  {
    free: true
  },
  {
    free: true,
    lightning: true
  }
]

const Speakers = () => (
  <Container>
    <Headline>Speakers</Headline>
    <Strip/>
    <Contact/>

    <Row>
      {
        data.map((item, key) => (
          <SpeakersItem {...item} key={key}/>
        ))
      }
    </Row>
  </Container>
)

export default Speakers


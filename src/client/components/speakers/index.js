import React from 'react'
import styled from 'styled-components'

import SmallButton from '../base/small-button'
import Headline from '../base/headline'
import Strip from '../base/strip'
import Container from '../base/container'

import Contact from './contact'
import Row from './row'
import SpeakersItem from './item'

import speakersData from '../../../assets/speakers.json'

const Speakers = () => (
  <Container>
    <Headline>Speakers</Headline>
    <Strip/>
    <Contact/>

    <Row>
      {
        speakersData.map((item, key) => (
          <SpeakersItem {...item} key={key}/>
        ))
      }
    </Row>

    <SmallButton href="/past-speakers">
      See our past speakers
    </SmallButton>
  </Container>
)

export default Speakers


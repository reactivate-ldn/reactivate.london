import React from 'react'

import SmallButton from '../base/small-button'
import Headline from '../base/headline'
import Strip from '../base/strip'
import Container from '../base/container'

import Contact from './contact'
import Row from './row'
import SpeakersItem from './item'

import speakersData from '../../assets/speakers.json'

const _speakersData = [0, 1, 2].map(i => speakersData[i])

const Speakers = () => (
  <Container>
    <Headline>Speakers</Headline>
    <Strip/>
    <Contact/>

    <Row>
      {
        _speakersData.map((item, key) => item ? (
          <SpeakersItem {...item} key={key}/>
        ) : (
          <SpeakersItem empty key={key}/>
        ))
      }
    </Row>

    <SmallButton href="/past-speakers">
      See our past speakers
    </SmallButton>
  </Container>
)

export default Speakers


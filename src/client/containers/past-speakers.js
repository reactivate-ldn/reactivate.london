import React, { Component } from 'react'

import Headline from '../components/base/headline'
import Strip from '../components/base/strip'
import Container from '../components/base/container'

import Row from '../components/speakers/row'
import Talk from '../components/speakers/talk'

import pastSpeakersData from '../../assets/pastSpeakers.json'

export default class PastSpeakers extends Component {
  render() {
    return (
      <Container>
        <Headline>Past Speakers</Headline>
        <Strip/>

        <Row>
          {
            pastSpeakersData.map((item, key) => (
              <Talk {...item} key={key}/>
            ))
          }
        </Row>
      </Container>
    )
  }
}

import React, { Component } from 'react'

import Title from '../components/cover/title'
import Headline from '../components/base/headline'
import SubHeadline from '../components/base/subheadline'
import Strip from '../components/base/strip'
import Container from '../components/base/container'

import Row from '../components/speakers/row'
import Talk from '../components/speakers/talk'

import pastSpeakersData from '../assets/pastSpeakers.json'

export default class PastSpeakers extends Component {
  render() {
    return (
      <Container>
        <Title isLink/>

        <Headline>Past Speakers</Headline>
        <Strip/>

        {
          pastSpeakersData.map(({ title, talks }, i) => (
            <div key={i}>
              <SubHeadline>{title}</SubHeadline>

              <Row>
                {
                  talks.map((talk, j) => (
                    <Talk {...talk} key={j}/>
                  ))
                }
              </Row>
            </div>
          ))
        }
      </Container>
    )
  }
}

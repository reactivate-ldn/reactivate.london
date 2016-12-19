import React from 'react'
import styled from 'styled-components'

import { slate, kevin } from '../../styles/colors'
import { containerWidth } from '../../styles/dimensions'
import rem from '../../styles/rem'

import TimelineItem from './item'
import Container from '../base/container'

const Row = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: ${rem(-30)} 0;
`

const Line = styled.div`
  position: absolute;
  top: ${rem(80)};
  left: ${rem(25)};
  bottom: ${rem(80)};
  width: 3px;
  margin-left: -1px;
  background: ${slate};
  z-index: 1;

  @media (max-width: 1200px) {
    left: ${rem(29)};
  }
`

const TrainTrack = () => (
  <Line>
    <TrainDecoration/>
  </Line>
)

const data = [{
  label: 'Doors Opening',
  time: '6:15 PM'
}, {
  label: 'Kickoff',
  time: '6:45 PM'
}, {
  label: 'Talks with small breaks',
  time: '6:50 PM'
}, {
  label: 'Mingling',
  time: '8:20 PM'
}]

const Timeline = () => (
  <Container>
    <Row>
      <Line/>

      {
        data.map((item, key) => (
          <TimelineItem {...item} key={key}/>
        ))
      }
    </Row>
  </Container>
)

export default Timeline


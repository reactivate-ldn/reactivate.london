import React from 'react'
import styled from 'styled-components'

import { slate, kevin } from '../../styles/colors'
import { containerWidth } from '../../styles/dimensions'
import rem from '../../styles/rem'

import TimelineItem from './item'
import Container from '../base/container'

export const Row = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: ${rem(-30)} 0;
`

export const Line = styled.div`
  position: absolute;
  top: ${rem(80)};
  left: ${rem(25)};
  bottom: ${rem(80)};
  width: 3px;
  margin-left: -1px;
  background: ${slate.toString()};
  z-index: 1;

  @media (max-width: 1200px) {
    html, body {
      left: ${rem(29)};
    }
  }
`

const data = [{
  label: 'Doors Opening',
  time: '6:00 PM'
}, {
  label: 'Talks',
  time: '6:30 PM'
}, {
  label: 'Mingling',
  time: '7:30 PM'
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


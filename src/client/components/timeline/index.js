import React from 'react'
import styled from 'styled-components'

import { slate, kevin } from '../../styles/colors'
import { containerWidth } from '../../styles/dimensions'
import rem from '../../styles/rem'

import TimelineItem from './item'
import Train from '../svgs/train'
import Container from '../base/container'

const Row = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: ${rem(-30)} auto;
`

const Line = styled.div`
  position: absolute;
  left: ${rem(40 + 28)};
  top: ${rem(40 + 80)};
  bottom: ${rem(40 + 80)};
  width: 3px;
  background: ${slate};
  z-index: 1;
`

const TrainDecoration = styled(Train)`
  position: absolute;
  bottom: 0;
  left: ${rem(-20)};

  width: ${rem(153)};
  height: ${rem(83)};

  @media (max-width: 450px) {
    display: none;
  }
`

const TrainTrack = () => (
  <Line>
    <TrainDecoration/>
  </Line>
)

const data = [{
  label: 'Doors Opening',
  time: '6 PM'
}, {
  label: 'Kickoff',
  time: '7 PM'
}, {
  label: 'Talks',
  time: '7:15 PM'
}, {
  label: 'Mingling',
  time: '8 PM'
}]

const Timeline = () => (
  <Row>
    <Line/>

    {
      data.map((item, key) => (
        <TimelineItem {...item} key={key}/>
      ))
    }
  </Row>
)

export default Timeline


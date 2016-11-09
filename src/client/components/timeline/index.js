import React from 'react'
import styled from 'styled-components'
import { slate, kevin } from '../../styles/colors'
import { containerWidth } from '../../styles/dimensions'
import rem from '../../styles/rem'

import TimelineItem from './item'
import Train from '../svgs/train'

const Container = styled.div`
  position: relative;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;

  max-width: ${containerWidth};
  width: ${containerWidth};
  margin: 0 auto;
`

const Line = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  bottom: 24px;
  height: 3px;
  background: ${slate};
  z-index: 1;
`

const TrainDecoration = styled(Train)`
  position: absolute;
  bottom: 0;
  left: ${rem(-28)};
`

const TrainTrack = () => (
  <Line>
    <TrainDecoration width="183px" height="83px"/>
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
  <Container>
    <TrainTrack/>

    <Row>
      {
        data.map((item, key) => (
          <TimelineItem {...item} key={key}/>
        ))
      }
    </Row>
  </Container>
)

export default Timeline


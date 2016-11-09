import React from 'react'
import styled from 'styled-components'

import { slate, kevin } from '../../styles/colors'
import { containerWidth } from '../../styles/dimensions'
import rem from '../../styles/rem'

import TimelineItem from './item'
import Train from '../svgs/train'
import Container from '../base/container'

const Wrapper = styled.div`
  width: 100%;
  padding: ${rem(48)} 0;
`

const InnerWrapper = styled.div`
  position: relative;
  width: 100%;
`

const Row = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  max-width: ${containerWidth};
  margin: 0 auto;
  padding: 0 ${rem(70)};
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
  <Wrapper>
    <InnerWrapper>
      <TrainTrack/>

      <Row>
        {
          data.map((item, key) => (
            <TimelineItem {...item} key={key}/>
          ))
        }
      </Row>
    </InnerWrapper>
  </Wrapper>
)

export default Timeline


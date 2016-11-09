import React, { Component } from 'react'
import styled from 'styled-components'
import { slate, kevin } from '../styles/colors';
import { boldWeight, fontSizes } from '../styles/fonts';

const Container = styled.div`
  position: relative;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
`

const OuterDot = styled.div`
  background: ${kevin.opacity(.2)};
  border-radius: 50%;
  width: 51px;
  height: 51px;
  padding: 17px;
  z-index: 2;
`

const InnerDot = styled.div`
  background: ${kevin};
  border-radius: 50%;
  width: 17px;
  height: 17px;
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

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ItemLabel = styled.h4`
  font-size: ${fontSizes[3]};
  font-weight: ${boldWeight};
  margin-bottom: 10px;
`

const ItemTime = styled.span`
  font-size: ${fontSizes[2]};
  font-weight: ${boldWeight};
  margin-bottom: 20px;
`

const Dot = () => (
  <OuterDot>
    <InnerDot/>
  </OuterDot>
)

const TimelineItem = () => (
  <Item>
    <ItemLabel>Doors Opening</ItemLabel>
    <ItemTime>6 PM</ItemTime>
    <Dot/>
  </Item>
)

const Timeline = () => (
  <Container>
    <Row>
      <Line/>
      <TimelineItem/>
      <TimelineItem/>
      <TimelineItem/>
      <TimelineItem/>
    </Row>
  </Container>
)

export default Timeline


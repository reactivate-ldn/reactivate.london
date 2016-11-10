import React from 'react'
import styled from 'styled-components'
import { kevin } from '../../styles/colors'
import { regularWeight, fontSizes } from '../../styles/fonts'

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

const Dot = () => (
  <OuterDot>
    <InnerDot/>
  </OuterDot>
)

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 0;
  flex-grow: 1;
`

const ItemLabel = styled.h4`
  font-size: ${fontSizes[3]};
  font-weight: ${regularWeight};
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 350px) {
    font-size: ${fontSizes[2]};
  }
`

const ItemTime = styled.span`
  font-size: ${fontSizes[2]};
  font-weight: ${regularWeight};
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 350px) {
    font-size: ${fontSizes[1]};
  }
`

const TimelineItem = ({ label, time }) => (
  <Item>
    <ItemLabel>{label}</ItemLabel>
    <ItemTime>{time}</ItemTime>
    <Dot/>
  </Item>
)

export default TimelineItem


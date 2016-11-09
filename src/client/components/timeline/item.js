import React from 'react'
import styled from 'styled-components'
import { kevin } from '../../styles/colors'
import { boldWeight, fontSizes } from '../../styles/fonts'

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

const TimelineItem = ({ label, time }) => (
  <Item>
    <ItemLabel>{label}</ItemLabel>
    <ItemTime>{time}</ItemTime>
    <Dot/>
  </Item>
)

export default TimelineItem


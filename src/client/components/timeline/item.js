import React from 'react'
import styled from 'styled-components'
import rem from '../../styles/rem'
import { kevin } from '../../styles/colors'
import { regularWeight, fontSizes } from '../../styles/fonts'

const OuterDot = styled.div`
  background: ${kevin.opacity(.2).toString()};
  border-radius: 50%;
  width: 51px;
  height: 51px;
  padding: 17px;
  z-index: 2;
`

const InnerDot = styled.div`
  background: ${kevin.toString()};
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
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: ${rem(160)};
`

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-left: ${rem(50)};
`

const ItemLabel = styled.h4`
  font-size: ${fontSizes[3]};
  font-weight: ${regularWeight};
  margin: 0;

  @media (max-width: 350px) {
    font-size: ${fontSizes[2]};
  }
`

const ItemTime = styled.span`
  font-size: ${fontSizes[2]};
  font-weight: ${regularWeight};
  margin: 0;

  @media (max-width: 350px) {
    font-size: ${fontSizes[1]};
  }
`

const TimelineItem = ({ label, time }) => (
  <Item>
    <Dot/>

    <ItemContent>
      <ItemLabel>{label}</ItemLabel>
      <ItemTime>{time}</ItemTime>
    </ItemContent>
  </Item>
)

export default TimelineItem


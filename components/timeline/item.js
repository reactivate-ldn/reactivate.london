import React from 'react'
import styled from 'styled-components'
import rem from '../../styles/rem'
import { kevin } from '../../styles/colors'
import { regularWeight, fontSizes } from '../../styles/fonts'

const OuterDot = styled.div`
  background: ${kevin.opacity(.2).toString()};
  border-radius: 50%;
  width: ${props => rem(props.big ? 61 : 51)};
  height: ${props => rem(props.big ? 61 : 51)};
  padding: ${props => rem(props.big ? 20 : 17)};
  z-index: 2;
`

const InnerDot = styled.div`
  background: ${kevin.toString()};
  border-radius: 50%;
  width: ${props => rem(props.big ? 21 : 17)};
  height: ${props => rem(props.big ? 21 : 17)};
`

export const Dot = ({ big }) => (
  <OuterDot big={big}>
    <InnerDot big={big} />
  </OuterDot>
)

export const Item = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: ${rem(120)};
`

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-left: ${rem(50)};
`

export const ItemLabel = styled.h4`
  font-size: ${fontSizes[3]};
  font-weight: ${regularWeight};
  margin: 0;

  @media (max-width: 350px) {
    font-size: ${fontSizes[2]};
  }
`

export const ItemTime = styled.span`
  font-size: ${fontSizes[2]};
  font-weight: ${regularWeight};
  margin: 0;

  @media (max-width: 350px) {
    font-size: ${fontSizes[1]};
  }
`

const TimelineItem = ({ label, time }) => (
  <Item>
    <Dot />

    <ItemContent>
      <ItemLabel>{label}</ItemLabel>
      <ItemTime>{time}</ItemTime>
    </ItemContent>
  </Item>
)

export default TimelineItem


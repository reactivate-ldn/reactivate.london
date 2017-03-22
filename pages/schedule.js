import React, { Component } from 'react'
import styled from 'styled-components'
import Head from 'next/head'

import rem from '../styles/rem'
import { mint } from '../styles/colors'
import { fontSizes } from '../styles/fonts'

import BackgroundImage from '../components/cover/image'
import Container from '../components/base/container'
import Title from '../components/cover/title'
import { Row, Line } from '../components/timeline'
import { Dot, Item, ItemContent, ItemLabel, ItemTime } from '../components/timeline/item'

import speakersData from '../assets/speakers.json'

const _speakersData = [0, 1, 2].map(i => speakersData[i])

const TitleRight = styled(Title)`
  text-align: right;
`

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  height: 100vh;
  padding: 0 ${rem(40)};
`

const FullLine = styled(Line)`
  position: absolute;
  left: ${rem(30)};
  top: 0;
  bottom: 0;
`

const TimelineRow = styled(Row)`
  margin: 0 ${rem(40)};
  justify-content: center;
`

const ItemTimeLeft = styled(ItemTime)`
  position: absolute;
  width: ${rem(100)};
  left: ${rem(-150)};
  text-align: right;
  font-size: ${fontSizes[3]};
`

const ItemSpeaker = styled(ItemTime)`
  color: ${mint.toString()};
  font-size: ${fontSizes[2]};
`

const ItemTalk = styled(ItemLabel)`
  font-size: ${fontSizes[3]};
`

const TimelineItem = ({ time, title, name }) => (
  <Item>
    <ItemTimeLeft>{time}</ItemTimeLeft>

    <Dot big/>

    <ItemContent>
      <ItemTalk>{title}</ItemTalk>
      <ItemSpeaker>{name}</ItemSpeaker>
    </ItemContent>
  </Item>
)

const Logo = styled(BackgroundImage)`
  opacity: 1;
  z-index: 0;
  background-position: right -20vh top;
  top: ${rem(40)};
`

export default class Schedule extends Component {
  render() {
    return (
      <RowContainer>
        <Head>
          <title>Reactivate London: Schedule</title>
        </Head>

        <Logo />
        <TitleRight />

        <TimelineRow>
          <FullLine />

          {
            _speakersData.map((data, index) => (
              <TimelineItem {...data} key={index} />
            ))
          }

        </TimelineRow>
      </RowContainer>
    )
  }
}

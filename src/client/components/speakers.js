import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

import rem from '../styles/rem'
import { mint, navy } from '../styles/colors'
import { boldWeight, fontSizes } from '../styles/fonts'

import Strip from './base/strip'
import Container from './base/container'
import Card from './base/card'
import Slot from './base/slot'

const SpeakersH1 = styled.h1`
  font-size: ${fontSizes[6]};
  line-height: ${fontSizes[6]};
  margin: 0;
  margin-bottom: ${rem(30)};
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  margin: ${rem(30)} ${rem(-15)};
`

const TalkContainer = styled(Card)`
  flex-basis: 0;
  flex-grow: 1;
  margin: 0 ${rem(15)};
`

const SlotContainer = styled(Slot)`
  flex-basis: 0;
  flex-grow: 1;
  margin: 0 ${rem(15)};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const SlotTitle = styled.h1`
  font-size: ${fontSizes[6]};
  margin: 0;
`

const SlotText = styled.h4`
  font-size: ${fontSizes[3]};
  text-align: center;
  margin: 0;
`

const Avatar = styled.img`
  width: ${rem(100)};
  height: ${rem(100)};
  border-radius: 50%;
  margin-bottom: ${rem(9)};
`

const Name = styled.a`
  display: block;
  font-size: ${fontSizes[3]};
  font-weight: ${boldWeight};
  text-decoration: underline;
  color: ${mint};
  margin: 0;
  margin-bottom: ${rem(9)};
`

const Title = styled.h5`
  font-size: ${fontSizes[2]};
  color: ${navy};
  margin: 0;
  margin-bottom: ${rem(9)};
`

const Text = styled.p`
  font-size: ${fontSizes[1]};
  margin: 0;
`

const Talk = ({ avatar, name, title, text, link }) => (
  <TalkContainer>
    <Avatar src={avatar}/>
    <Name href={link} target="_blank">{name}</Name>
    <Title>{title}</Title>
    <Text>
      {
        text
          .split('\n')
          .reduce((acc, text, key) => acc
            .concat([
              <br key={key}/>,
              text
            ]),
          [])
          .slice(1)
      }
    </Text>
  </TalkContainer>
)

const data = [{
  avatar: 'https://pbs.twimg.com/profile_images/792591170899681280/uUXOGmgo.jpg',
  link: 'https://twitter.com/ken_wheeler',
  name: 'Ken Wheeler',
  title: 'My year in open source at Formidable',
  text: 'In this talk Ken will detail his year in open source at Formidable.\nHe will be showing demos of the fun stuff they are building at Formidable and speaking to what we can expect from them in the future.'
}, {
  tba: true
}, {
  free: true
}]

const Speakers = () => (
  <Container>
    <SpeakersH1>Speakers</SpeakersH1>
    <Strip/>

    <Row>
      {
        data.map((item, key) => {
          if (item.free) {
            return (
              <SlotContainer key={key}>
                <SlotTitle>?</SlotTitle>
                <SlotText>
                  Are you interested in speaking? This slot could be yours!
                </SlotText>
              </SlotContainer>
            )
          } else if (item.tba) {
            return (
              <SlotContainer key={key}>
                <SlotTitle>TBA</SlotTitle>
                <SlotText>
                  Someone is preparing an awesome talk, but it isn't quite ready yet...
                </SlotText>
              </SlotContainer>
            )
          }

          return <Talk {...item} key={key}/>
        })
      }
    </Row>
  </Container>
)

export default Speakers


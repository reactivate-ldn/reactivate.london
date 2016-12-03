import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

import rem from '../styles/rem'
import { white, mint, navy } from '../styles/colors'
import { regularWeight, boldWeight, fontSizes } from '../styles/fonts'

import Button from './base/button'
import Headline from './base/headline'
import Strip from './base/strip'
import Container from './base/container'
import Card from './base/card'
import Slot from './base/slot'

const SubmitTalk = styled(Button)`
  font-size: ${fontSizes[2]};
  font-weight: ${regularWeight};
  padding: 0 ${rem(20)};
  line-height: ${rem(45)};
  height: ${rem(45)};
  min-width: ${rem(150)};
  margin-top: ${rem(10)};
`

const Row = styled.div`
  display: flex; flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  margin: ${rem(30)} ${rem(-15)};

  @media (min-width: 751px) {
    > div {
      flex-basis: 0;
      flex-grow: 1;
    }
  }

  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

const TalkContainer = styled(Card)`
  margin: 0 ${rem(15)} ${rem(25)};

  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 ${rem(15)} ${rem(45)};
  }
`

const SlotContainer = styled(Slot)`
  margin: 0 ${rem(15)} ${rem(25)};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 ${rem(15)} ${rem(45)};
  }
`

const SlotTitle = styled.h1`
  font-size: ${fontSizes[6]};
  margin: 0;
`

const SlotText = styled.h4`
  color: ${white.opacity(.75)};
  font-size: ${fontSizes[3]};
  font-weight: ${regularWeight};
  text-align: center;
  margin: 0 0 ${rem(10)};
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

const Contact = styled.p`
  font-size: ${fontSizes[2]};
  margin: ${rem(35)} 0 ${rem(25)};
`

const Link = styled.a`
  color: inherit;
  text-decoration: underline;
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

/*
 * avatar: url
 * link: url
 * name,
 * title,
 * text
 * [tba]
 * [free]
 */
const data = [
  {
    avatar: '/static/Daniela.jpg',
    link: 'https://twitter.com/sericaia',
    name: 'Daniela Matos de Carvalho',
    title: 'React Fiber',
    text: 'React Fiber is an ongoing reimplementation of React\'s core algorithm. It is the culmination of over two years of research by the React team. This talk will explain what the main differences are and what the React team is doing to push this forward.'
  },
  {
    avatar: '/static/Shaun.jpg',
    link: 'https://twitter.com/shaundunne',
    name: 'Shaun Dunne',
    title: 'The Open Metaverse: VR for the Web',
    text: 'Unless you\'ve been hiding under a rock for the past few years you\'ve probably heard of VR. This is a talk about WebVR. Yes. VR on the Web, in your browser. Not only is it awesome to experience, it\'s fun and easy to experiment with and has a vast ecosystem already.'
  },
  {
    avatar: '/static/Federico.jpg',
    link: 'https://twitter.com/framp',
    name: 'Federico Rampazzo',
    title: 'Understanding Monads',
    text: 'Do you want to take your functional programming to the next level? Buckle up then, this talks is going to be a journey through the Fantasyland of Algebraic Data Structures. Never ask yourself how to implement and use Setoids, Functors or Monads again.'
  }
]

const Speakers = () => (
  <Container>
    <Headline>Speakers</Headline>
    <Strip/>

    <Contact>
      We're always stoked to listen to great talks.<br/>
      <Link href="https://www.papercall.io/reactivate-london" target="_blank">
        If you want to become a speaker, submit your talk to us!
      </Link>
    </Contact>

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
                <SubmitTalk href="https://www.papercall.io/reactivate-london" target="_blank">
                  Submit your talk
                </SubmitTalk>
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


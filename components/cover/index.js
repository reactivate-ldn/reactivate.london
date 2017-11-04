import React from 'react'
import styled from 'styled-components'

import rem from '../../styles/rem'
import { navy } from '../../styles/colors'

import Container from '../base/container'
import Button from '../base/button'
import Strip from '../base/strip'
import Title from './title'
import Header from './header'
import Description from './description'
import BackgroundImage from './image'
import { meetupLink } from '../../assets/meta.json'

const Level = styled.div`
  z-index: 1;
`

const TitleWrapper = styled.div`
  display: flex;
`

const Edition = styled.h1`
  font-size: ${rem(64)};
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 10px;
  color: ${navy.lighten(0.25).toString()};
`

const XmasDecor = styled.div`
  position: fixed;
  top: 0;
  left: 40vw;
  height: 45vh;
  width: 35vh;
  opacity: 0.8;
  user-select: none;
  pointer-events: none;

  background-image: url('/static/ChristmasOrnaments.svg');
  background-repeat: no-repeat;
  background-size: contain;

  z-index: -1;

  @media (max-width: 850px) {
    height: 50vw;
    width: 40vw;
    left: 40vw;
    position: absolute;
    opacity: 1;
}
`

const Cover = () => (
  <Container>
    <XmasDecor/>
    <BackgroundImage/>
    <Level>
      <TitleWrapper>
        <Title/>
        {/* <Edition>#2</Edition> */}
      </TitleWrapper>
      <Header/>
      <Button href={meetupLink} target="_blank" rel="noopener">
        Join
      </Button>
      <Description/>
    </Level>
  </Container>
)

export default Cover


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
  color: ${navy.lighten(0.25)};
`

const Cover = () => (
  <Container>
    <BackgroundImage/>
    <Level>
      <TitleWrapper>
        <Title/>
        <Edition>#2</Edition>
      </TitleWrapper>
      <Header/>
      <Button href="https://www.meetup.com/Reactivate-London/" target="_blank">
        Join
      </Button>
      <Description/>
    </Level>
  </Container>
)

export default Cover


import React from 'react'
import styled from 'styled-components'

import rem from '../../styles/rem'
import { navy } from '../../styles/colors'

import Button from '../base/button'
import Strip from '../base/strip'
import Container from '../base/container'
import Header from './header'
import Description from './description'
import BackgroundImage from './image'

const Level = styled.div`
  z-index: 1;
`

const Title = styled.h2`
  max-width: ${rem(160)};
  color: ${navy.lighten(0.25)};
`

const Cover = () => (
  <Container>
    <BackgroundImage/>

    <Level>
      <Title>The Reactivate London Meetup</Title>
      <Header/>
      <Button href="https://www.meetup.com/Reactivate-London/" target="_blank">
        Join
      </Button>
      <Description/>
    </Level>
  </Container>
)

export default Cover


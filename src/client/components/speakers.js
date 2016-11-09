import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

import { fontSizes } from '../styles/fonts'

import Strip from './base/strip'
import Button from './base/button'
import Container from './base/container'

const SpeakersH1 = styled.h1`
  font-size: ${fontSizes[6]};
  line-height: ${fontSizes[6]};
  margin: 0px;
  margin-bottom: 30px;
`

const Speakers = () => (
  <Container>
    <SpeakersH1>Speakers</SpeakersH1>
    <Strip/>
    <Button>Join</Button>
  </Container>
)

export default Speakers


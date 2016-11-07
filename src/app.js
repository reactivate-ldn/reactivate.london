import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { white, black } from './styles/colors';
import { sansSerif, regularWeight, fontSizes, lineHeights } from './styles/fonts';

import 'sanitize.css/sanitize.css'
import './fonts.css'

const Container = styled.div`
  background: ${white};
  color: ${black};
  font-family: ${sansSerif};
  font-weight: ${regularWeight};
  font-size: ${fontSizes[0]};
  line-height: ${lineHeights[0]};
`

export default class App extends Component {
  render() {
    return (
      <Container>
      </Container>
    )
  }
}


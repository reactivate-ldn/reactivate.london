import React from 'react'
import styled from 'styled-components'

import rem from '../../styles/rem'
import { fontSizes, regularWeight } from '../../styles/fonts'

const DescriptionText = styled.div`
  font-size: ${fontSizes[4]};
  max-width: 70%;
  min-width: ${rem(550)};
  font-weight: ${regularWeight};
  margin-top: ${rem(60)};

  @media (max-width: 750px) {
    font-size: ${rem(36)};
    min-width: 100%;
    width: 100%;
  }

  @media (max-width: 450px) {
    font-size: ${rem(30)};
  }
`

const Description = () => (
  <DescriptionText>
    Join us for our React London 2017 preparty with fun React workshops for beginners and advanced React coders alike,
    and awesome lightning talks.
    Pizza and drinks on the house, of course!
  </DescriptionText>
)

export default Description


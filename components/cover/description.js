import React from 'react'
import styled from 'styled-components'

import rem from '../../styles/rem'
import { fontSizes, regularWeight } from '../../styles/fonts'
import { description } from '../../assets/meta.json'
import Link from '../base/link';

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
    {description + ' '}
    <Link href="/code-of-conduct">Please read our Code of Conduct</Link>
  </DescriptionText>
)

export default Description

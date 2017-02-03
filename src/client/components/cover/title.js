import React from 'react'
import styled from 'styled-components'

import rem from '../../styles/rem'
import { navy } from '../../styles/colors'

import SubHeadline from '../base/subheadline'
import Link from '../base/link'

const TitleText = styled(SubHeadline)`
  max-width: ${rem(160)};
`

const TitleLink = styled(Link)`
  text-decoration-color: ${navy.lighten(0.25).toString()};
`

const text = (
  <TitleText>
    The Reactivate London Meetup
  </TitleText>
)

const Title = ({ isLink }) => {
  if (isLink) {
    return (
      <TitleLink href="/">
        {text}
      </TitleLink>
    )
  }

  return text
}

export default Title


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

const text = 'The Reactivate London Meetup'

const Title = ({ isLink, className }) => {
  const title = (
    <TitleText className={className}>
      {text}
    </TitleText>
  )

  if (isLink) {
    return (
      <TitleLink href="/">
        {title}
      </TitleLink>
    )
  }

  return title
}

export default Title


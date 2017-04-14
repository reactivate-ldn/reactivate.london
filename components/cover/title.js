import React from 'react'
import styled from 'styled-components'

import rem from '../../styles/rem'
import { navy } from '../../styles/colors'
import SubHeadline from '../base/subheadline'
import Link from '../base/link'
import { title } from '../../assets/meta.json'

const TitleText = styled(SubHeadline)`
  max-width: ${rem(160)};
`

const TitleLink = styled(Link)`
  text-decoration-color: ${navy.lighten(0.25).toString()};
`

const Title = ({ isLink, className }) => {
  const element = (
    <TitleText className={className}>
      {title}
    </TitleText>
  )

  if (isLink) {
    return (
      <TitleLink href="/">
        {element}
      </TitleLink>
    )
  }

  return element
}

export default Title


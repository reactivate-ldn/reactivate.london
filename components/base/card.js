import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

import rem from '../../styles/rem'
import { borderRadius } from '../../styles/dimensions'
import { white, black } from '../../styles/colors'
import { diffuseShadow } from '../../styles/shadows'

const Card = styled.div`
  background: ${white.toString()};
  color: ${black.toString()};
  border-radius: ${borderRadius};
  padding: ${rem(26)};
  box-shadow: ${diffuseShadow};
`

export default Card


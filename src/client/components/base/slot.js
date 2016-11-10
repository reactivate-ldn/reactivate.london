import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

import rem from '../../styles/rem'
import { borderRadius } from '../../styles/dimensions'
import { white, navy } from '../../styles/colors'
import { diffuseShadow } from '../../styles/shadows'

const Slot = styled.div`
  background: ${navy.lighten(.017)};
  color: ${white.opacity(.8)};
  padding: ${rem(26)};
  border-radius: ${borderRadius};
  border: 3px dashed ${white.opacity(.2)};
  box-shadow: ${diffuseShadow};
`

export default Slot


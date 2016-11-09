import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

import rem from '../../styles/rem'
import { borderRadius } from '../../styles/dimensions'
import { white } from '../../styles/colors'

const Slot = styled.div`
  color: ${white.opacity(.17)};
  padding: ${rem(26)};
  border-radius: ${borderRadius};
  border: 3px dashed ${white.opacity(.2)};
`

export default Slot


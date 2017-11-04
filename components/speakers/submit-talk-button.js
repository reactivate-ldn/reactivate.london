import React from 'react'
import styled from 'styled-components'

import SmallButton from '../base/small-button'
import rem from '../../styles/rem'
import { regularWeight, fontSizes } from '../../styles/fonts'

const SubmitTalkButton = () => (
  <SmallButton href="http://bit.ly/SubmitReactivate" target="_blank" rel="noopener">
    Submit your talk
  </SmallButton>
)

export default SubmitTalkButton


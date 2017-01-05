import React from 'react'
import styled from 'styled-components'

import Button from '../base/button'
import rem from '../../styles/rem'
import { regularWeight, fontSizes } from '../../styles/fonts'

const SubmitTalk = styled(Button)`
  font-size: ${fontSizes[2]};
  font-weight: ${regularWeight};
  padding: 0 ${rem(20)};
  line-height: ${rem(45)};
  height: ${rem(45)};
  min-width: ${rem(150)};
  margin-top: ${rem(10)};
`

const SubmitTalkButton = () => (
  <SubmitTalk href="https://www.papercall.io/reactivate-london" target="_blank">
    Submit your talk
  </SubmitTalk>
)

export default SubmitTalkButton


import React from 'react'
import styled from 'styled-components'

import rem from '../../styles/rem'
import { fontSizes } from '../../styles/fonts'
import Link from '../base/link'

const Text = styled.p`
  font-size: ${fontSizes[2]};
  margin: ${rem(35)} 0 ${rem(25)};
`

const Contact = () => (
  <Text>
    We're always stoked to listen to great talks.<br/>
    <Link href="https://www.papercall.io/reactivate-london" target="_blank">
      If you want to become a speaker, submit your talk to us!
    </Link>
  </Text>
)

export default Contact


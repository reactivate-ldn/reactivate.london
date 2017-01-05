import styled from 'styled-components'

import rem from '../../styles/rem'
import { regularWeight, fontSizes } from '../../styles/fonts'
import Button from './button'

const SmallButton = styled(Button)`
  font-size: ${fontSizes[2]};
  font-weight: ${regularWeight};
  padding: 0 ${rem(20)};
  line-height: ${rem(45)};
  height: ${rem(45)};
  min-width: ${rem(150)};
  margin-top: ${rem(10)};
`

export default SmallButton

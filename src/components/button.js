import styled from 'styled-components'
import rem from '../styles/rem'

import { smallShadow } from '../styles/shadows'
import { borderRadius } from '../styles/dimensions'
import { sansSerif, regularWeight, fontSizes } from '../styles/fonts'
import { blue, white } from '../styles/colors'

const Button = styled.a`
  font-family: ${sansSerif};
  font-size: ${fontSizes[3]};
  font-weight: ${regularWeight};
  text-align: center;
  color: ${blue};
  background: ${white};
  width: ${rem(180)};
  line-height: ${rem(44)};
  vertical-align: middle;
  border-radius: ${borderRadius};
  user-select: none;

  &:hover {
    box-shadow: ${smallShadow};
  }

  &:active {
    background: ${blue.whiten(0.78)};
  }
`

export default Button


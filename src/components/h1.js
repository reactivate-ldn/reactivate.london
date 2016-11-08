import styled from 'styled-components'
import rem from '../styles/rem';
import { serif, regularWeight, fontSizes } from '../styles/fonts'

const Header1 = styled.h1`
  font-family: ${serif};
  font-size: ${fontSizes[4]};
  font-weight: ${regularWeight};
  text-align: center;
  color: inherit;
  margin: 0;
`

export default Header1


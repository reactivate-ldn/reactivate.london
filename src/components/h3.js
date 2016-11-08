import styled from 'styled-components'
import rem from '../styles/rem';
import { sansSerif, regularWeight, fontSizes } from '../styles/fonts'

const Header3 = styled.h3`
  font-family: ${sansSerif};
  font-size: ${fontSizes[2]};
  font-weight: ${regularWeight};
  text-align: center;
  color: inherit;
  margin: 0;
`

export default Header3


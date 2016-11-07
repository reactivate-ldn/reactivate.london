import styled from 'styled-components'
import { white, black } from '../styles/colors';
import { sansSerif, regularWeight, fontSizes, lineHeights } from '../styles/fonts';

const Container = styled.div`
  background: ${white};
  color: ${black};
  font-family: ${sansSerif};
  font-weight: ${regularWeight};
  font-size: ${fontSizes[0]};
  line-height: ${lineHeights[0]};
  width: 100%;
`

export default Container


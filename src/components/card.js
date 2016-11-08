import styled from 'styled-components'

import rem from '../styles/rem'
import { white, black } from '../styles/colors';
import { defaultShadow } from '../styles/shadows';
import { borderRadius } from '../styles/dimensions';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  color: ${black};
  background: ${white};
  box-shadow: ${defaultShadow};
  margin: 0 auto ${rem(63)};
  padding: ${rem(25)} 0;
  border-radius: ${borderRadius};
`

export default Card


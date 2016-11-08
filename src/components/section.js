import styled from 'styled-components'
import { white, blue } from '../styles/colors';
import { defaultShadow } from '../styles/shadows';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${white};
  background: ${blue};
  box-shadow: ${defaultShadow};
  width: 100%;
`

export default Section


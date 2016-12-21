import styled from 'styled-components'
import { white, navy } from '../styles/colors'

const Root = styled.div`
  position: relative;
  background-color: ${navy};
  color: ${white};
  overflow: auto;
  min-height: 100vh;
  z-index: 0;
`

export default Root

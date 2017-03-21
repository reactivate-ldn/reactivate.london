import styled from 'styled-components'

import rem from '../../styles/rem'
import { white } from '../../styles/colors'
import { containerWidth } from '../../styles/dimensions'

const Container = styled.div`
  max-width: ${containerWidth};
  margin: 0 auto;
  padding: ${rem(48)} ${rem(40)};
  overflow: hidden;
`

export default Container


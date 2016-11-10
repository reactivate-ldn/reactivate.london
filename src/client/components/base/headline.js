import styled from 'styled-components'

import rem from '../../styles/rem'
import { boldWeight, fontSizes } from '../../styles/fonts'

const Headline = styled.h1`
  font-size: ${fontSizes[6]};
  font-weight: ${boldWeight};
  line-height: 1;
  margin: 0 0 ${rem(25)};

  @media (max-width: 400px) {
    font-size: ${rem(75)};
  }
`

export default Headline


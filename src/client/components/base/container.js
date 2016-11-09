import styled from 'styled-components'

import rem from '../../styles/rem'
import { containerWidth } from '../../styles/dimensions'

export default styled.div`
  max-width: ${containerWidth};
  margin: 0 auto;
  padding: 0 ${rem(40)};
`;

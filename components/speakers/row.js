import React from 'react'
import styled from 'styled-components'

import rem from '../../styles/rem'

const Row = styled.div`
  display: flex; flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  margin: ${rem(30)} ${rem(-15)};

  @media (min-width: 751px) {
    > div {
      flex-basis: 0;
      flex-grow: 1;
    }
  }

  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export default Row


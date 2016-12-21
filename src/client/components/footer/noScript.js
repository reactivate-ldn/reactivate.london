import React from 'react'
import styled from 'styled-components'

import { navy } from '../../styles/colors'

const ReplacementMap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  background-size: cover;
  background-position: center;
  background-color: ${navy};
  background-image: url('/static/Map.jpg');
`

const NoScript = () => {
  if (typeof window === 'undefined') {
    return (
      <ReplacementMap key="noscript"/>
    )
  }

  return <div key="noscript"/>
}

export default NoScript


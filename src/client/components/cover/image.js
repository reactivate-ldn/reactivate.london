import React from 'react'
import styled from 'styled-components'

import rem from '../../styles/rem'

const BackgroundImage = styled.div`
  position: fixed;
  top: ${rem(20)};
  height: 65vh;
  width: 65vh;
  right: 0;
  opacity: 0.7;
  user-select: none;
  pointer-events: none;

  background-image: url('/static/Logo.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right -30vh top;

  z-index: -1;

  @media (max-width: 850px) {
    height: 80vw;
    width: 80vw;
    right: 0;
    position: absolute;
    opacity: 0.2;
    background-position: right -37vw top;
  }
`

export default BackgroundImage


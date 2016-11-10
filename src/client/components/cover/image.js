import React from 'react'
import styled from 'styled-components'

const BackgroundImage = styled.div`
  position: fixed;
  right: 0px;
  top: 20px;
  height: 65vh;
  width: 100%;
  opacity: 0.7;
  user-select: none;
  pointer-events: none;

  background-image: url('/static/Logo.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 100% 0%;

  z-index: -1;

  @media (max-width: 850px) {
    height: 80vw;
    position: absolute;
    opacity: 0.2;
  }
`

export default BackgroundImage


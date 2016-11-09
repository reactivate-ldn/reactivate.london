import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

import rem from '../../styles/rem'
import { white, mint, fern, ivy } from '../../styles/colors'
import { borderRadius } from '../../styles/dimensions'
import { boldWeight, fontSizes } from '../../styles/fonts'
import { ligthShadow } from '../../styles/shadows'

const Button = styled.a`
  display: inline-block;
  background-color: ${mint};
  min-width: ${rem(268)};
  padding: 0 ${rem(40)};
  cursor: pointer;
  height: ${rem(70)};
  text-align: center;
  transition: all .2s ease-in-out;

  color: ${white};
  font-size: ${fontSizes[4]};
  font-weight: ${boldWeight};
  line-height: ${rem(70)};
  vertical-align: middle;

  border-bottom: 3px solid ${ivy};
  border-radius: ${borderRadius};
  box-shadow: ${ligthShadow};
  user-select: none;

  &:hover {
    background-color: ${fern};
  }

  &:active {
    border-bottom: 0 solid ${ivy};
  }
`

export default Button

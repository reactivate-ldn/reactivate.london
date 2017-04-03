import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

import rem from '../../styles/rem'
import { white, mint, fern, ivy } from '../../styles/colors'
import { borderRadius } from '../../styles/dimensions'
import { boldWeight, fontSizes } from '../../styles/fonts'
import { shallowShadow } from '../../styles/shadows'

const Button = styled.a`
  display: inline-block;
  background-color: ${mint.toString()};
  min-width: ${rem(268)};
  padding: 0 ${rem(40)};
  cursor: pointer;
  height: ${rem(66)};
  text-align: center;
  transition: all .2s ease-in-out;

  color: ${white.toString()};
  font-size: ${rem(34)};
  font-weight: ${boldWeight};
  line-height: ${rem(66)};
  vertical-align: middle;
  text-decoration: none;

  border-radius: ${borderRadius};
  box-shadow: ${shallowShadow};
  user-select: none;

  &:hover {
    background-color: ${fern.toString()};
  }

  &:active {
    background-color: ${fern.darken(0.2).toString()};
  }
`

export default Button

export const colorButton = color => styled(Button)`
  background-color: ${color.toString()};

  &:hover {
    background-color: ${color.darken(.1).toString()};
  }

  &:active {
    background-color: ${color.darken(.3).toString()};
  }
`


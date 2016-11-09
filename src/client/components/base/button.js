import React, { Component, PropTypes } from 'react'
import styled from 'styled-components';
import { mint, fern } from '../../styles/colors';
import { borderRadius } from '../../styles/dimensions';
import { fontSizes } from '../../styles/fonts';

const Button = styled.a`
  backgroundColor: ${mint.toString('hex')};
  color: white;
  height: 50px;
  width: 200px;
  font-size: ${fontSizes[3]};
  border-radius: ${borderRadius};
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    backgroundColor: ${fern.toString('hex')};
  }
`;

export default Button;

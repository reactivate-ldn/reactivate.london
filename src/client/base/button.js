import React, { Component, PropTypes } from 'react'
import styled from 'styled-components';

const Button = styled.a`
  backgroundColor: green;
  color: white;
  height: 40px;
  width: 100px;
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    backgroundColor: grey;
  }
`;

export default Button;

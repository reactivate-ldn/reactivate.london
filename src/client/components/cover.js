import React, { Component, PropTypes } from 'react'
import Button from './base/button';
import styled from 'styled-components';

const JoinButton = styled.a`
  background-color: blue;
  color: black;
  height: 40px;
  width: 100px;
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: grey;
  }

`;

export default class Cover extends React.PureComponent {
  render() {
    return (
      <div>
        <JoinButton>Join</JoinButton>
      </div>
    );
  }
}

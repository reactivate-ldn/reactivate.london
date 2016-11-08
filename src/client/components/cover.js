import React, { Component, PropTypes } from 'react'
import Button from './base/button';
import styled from 'styled-components';

const JoinButton = styled(Button)`
  background: yellow
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

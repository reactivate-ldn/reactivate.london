import React, { Component, PropTypes } from 'react'
import styled from 'styled-components';
import { fontSizes } from '../styles/fonts';
import Strip from './base/strip';
import Button from './base/button';

const SpeakersWrapper = styled.div`
  color: white;
  margin-top: 80px;
`;

const SpeakersH1 = styled.h1`
  font-size: ${fontSizes[6]};
  line-height: ${fontSizes[6]};
  margin: 0px;
  margin-bottom: 30px;
`;

export default class Speakers extends React.PureComponent {
  render() {
    return (
      <SpeakersWrapper>
        <SpeakersH1>Speakers</SpeakersH1>
        <Strip/>
        <Button>Join</Button>
      </SpeakersWrapper>
    );
  }
}

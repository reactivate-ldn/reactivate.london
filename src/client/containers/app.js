import React, { Component, PropTypes } from 'react'
import Cover from '../components/cover';
import Speakers from '../components/speakers';
import styled from 'styled-components';
import { navy } from '../styles/colors';

const Background = styled.div`
  background-color: ${navy.toString('hex')}
  overflow: auto;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0px auto;
  padding: 0px 40px;
`;

export default class App extends Component {
  render() {
    return (
      <Background>
        <Container>
          <Cover/>
          <Speakers/>
        </Container>
      </Background>
    )
  }
}

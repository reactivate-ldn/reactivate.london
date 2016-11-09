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
  state = {
    initial: true
  };

  componentDidMount() {
    this.setState({ initial: false })
  }

  renderMap() {
    const ReactMapboxGl = require('react-mapbox-gl').default

    return (
      <ReactMapboxGl
        accessToken="pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A"
        style="mapbox://styles/mapbox/light-v8"
        containerStyle={{ height: "400px", width: "100%" }}
        center={[-0.1090978, 51.5181061]}/>
    );
  }

  render() {
    const { initial } = this.state

    return (
      <Background>
        <Container>
          <Cover/>
          <Speakers/>
        </Container>
        {
          !initial && this.renderMap()
        }
      </Background>
    )
  }
}

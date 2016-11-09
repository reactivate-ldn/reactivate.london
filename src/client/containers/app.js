import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { containerWidth } from '../styles/dimensions'
import { white, navy } from '../styles/colors'

import Cover from '../components/cover'
import Timeline from '../components/timeline'
import Speakers from '../components/speakers'

const Background = styled.div`
  background-color: ${navy};
  color: ${white};
  overflow: auto;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: ${containerWidth};
  width: ${containerWidth};
  margin: 0 auto;
  padding: 0 40px;
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
        </Container>

        <Timeline/>

        <Container>
          <Speakers/>
        </Container>

        {!initial && this.renderMap()}

      </Background>
    )
  }
}

import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { fontSizes, boldWeight } from '../styles/fonts'
import { black } from '../styles/colors';
import Container from './base/container';

const FooterCard = styled.div`
  width: 250px;
  height: 350px;
  margin-top: 60px;
  background-color: white;
  position: absolute;
  z-index: 1;
  color: ${black.lighten(0.2).toString('hex')};
`;

const FooterList = styled.ul`
  list-style-type: none;
  font-weight: ${boldWeight};
  font-size: ${fontSizes[2]}
`;

const FooterWrapper = styled.div`
  height: 730px;
`;

class Footer extends React.Component {
  state = {
    initial: true
  };

  componentDidMount() {
    this.setState({ initial: false })
  }

  renderMap() {
    const ReactMapboxGlTool = require('react-mapbox-gl')
    const ReactMapboxGl = ReactMapboxGlTool.default;
    const { Layer, Feature } = ReactMapboxGlTool;

    return (
      <ReactMapboxGl
        accessToken="pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A"
        style="mapbox://styles/mapbox/light-v8"
        containerStyle={{ height: "100%", width: "100%" }}
        center={[-0.1090978, 51.5181061]}>
        <Layer
          type="symbol"
          layout={{ "icon-image": "harbor-15" }}>
          <Feature
            coordinates={[-0.1090978, 51.5181061]}/>
        </Layer>
      </ReactMapboxGl>
    );
  }

  render() {
    const { initial } = this.state;

    return (
      <FooterWrapper>
        <Container>
          <FooterCard>
            <FooterList>
              <li><img src=""/></li>
              <li>3rd Floor</li>
              <li>120 Holborn</li>
              <li>EC1N 2TD London</li>
            </FooterList>
          </FooterCard>
        </Container>
        { !initial && this.renderMap() }
      </FooterWrapper>
    )
  }
}

export default Footer


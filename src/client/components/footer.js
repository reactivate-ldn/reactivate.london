import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

import rem from '../styles/rem'
import { fontSizes, boldWeight } from '../styles/fonts'
import { black } from '../styles/colors';

import Trainline from './svgs/trainline';
import Container from './base/container';
import Card from './base/card';

const FooterCard = styled(Card)`
  width: ${rem(250)};
  position: absolute;
  top: ${rem(60)};
  z-index: 1;
`;

const FooterList = styled.ul`
  list-style-type: none;
  font-weight: ${boldWeight};
  font-size: ${fontSizes[2]}
  margin: 0;
  padding: 0;
`;

const FooterWrapper = styled.div`
  position: relative;
  height: ${rem(700)};
`;

const TrainlineLogo = styled(Trainline)`
  width: ${rem(128)};
  height: ${rem(30)};
  margin-bottom: ${rem(10)};
`

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
              <li>
                <TrainlineLogo/>
              </li>
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


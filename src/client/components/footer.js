import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

import rem from '../styles/rem'
import { insetShadow, shallowShadow } from '../styles/shadows'
import { regularWeight, fontSizes, boldWeight } from '../styles/fonts'
import { citymapper, white, black } from '../styles/colors';

import Trainline from './svgs/trainline';
import Container from './base/container';
import Card from './base/card';
import { colorButton } from './base/button';

const FooterCard = styled(Card)`
  width: ${rem(270)};
  position: absolute;
  top: ${rem(85)};
  left: ${rem(60)};
  bottom: ${rem(85)};
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const FooterList = styled.ul`
  list-style-type: none;
  font-weight: ${boldWeight};
  font-size: ${fontSizes[2]}
  margin: ${rem(10)} 0;
  padding: 0;
`;

const FooterWrapper = styled.div`
  margin-top: ${rem(70)};
  position: relative;
  height: ${rem(450)};
  max-height: ${rem(450)};
  overflow: hidden;
`;

const Shadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  box-shadow: ${insetShadow};
`

const TrainlineLogo = styled(Trainline)`
  width: ${rem(128)};
  height: ${rem(30)};
  margin-bottom: ${rem(10)};
`

const EmojiPin = styled.div`
  width: ${rem(36)};
  height: ${rem(36)};
  margin-left: ${rem(-18)};
  margin-top: ${rem(-18)};
  border-radius: 50%;

  background-color: ${white};
  background-image: url('/static/Marker.png');
  background-size: ${rem(24)} ${rem(24)};
  background-position: center;
  box-shadow: ${shallowShadow};
`

const CityMapper = styled(colorButton(citymapper))`
  font-size: ${fontSizes[2]};
  font-weight: ${regularWeight};
  padding: 0 ${rem(20)};
  line-height: ${rem(45)};
  height: ${rem(45)};
  min-width: ${rem(150)};
  box-shadow: none;
  margin-top: ${rem(15)};
`

const Link = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
`

const location = [-0.1090978, 51.5181061]

class Footer extends React.Component {
  state = {
    initial: true
  };

  componentDidMount() {
    this.setState({ initial: false })
  }

  renderMap() {
    const {
      default: Map,
      ZoomControl,
      Marker
    } = require('react-mapbox-gl')

    return (
      <Map
        accessToken="pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A"
        style="mapbox://styles/mapbox/streets-v8"
        containerStyle={{ height: rem(470), width: "100%" }}
        scrollZoom={false}
        zoom={[12]}
        center={location}>

        <Marker coordinates={location}>
          <EmojiPin/>
        </Marker>
      </Map>
    );
  }

  render() {
    const { initial } = this.state;

    return (
      <FooterWrapper>
        { !initial && this.renderMap() }

        <Shadow/>

        <FooterCard>
          <Link href="https://thetrainline.com" target="_blank">
            <TrainlineLogo/>
          </Link>

          <FooterList>
            <li>3rd Floor</li>
            <li>120 Holborn</li>
            <li>EC1N 2TD London</li>
          </FooterList>

          <CityMapper href="https://citymapper.com/go/gvab8p" target="_blank">
            Get Directions
          </CityMapper>
        </FooterCard>
      </FooterWrapper>
    )
  }
}

export default Footer


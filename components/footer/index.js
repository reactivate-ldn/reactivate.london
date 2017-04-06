import React from 'react'
import styled from 'styled-components'

import rem from '../../styles/rem'
import { insetShadow, shallowShadow } from '../../styles/shadows'
import { regularWeight, fontSizes, boldWeight } from '../../styles/fonts'
import { citymapper, white, black } from '../../styles/colors';

import NoScript from './noScript';
import Map from './map';
import Card from '../base/card';
import { colorButton } from '../base/button';

import Train from '../../assets/train.svg'
import Trainline from '../../assets/trainline.svg';

const Container = styled.div`
  margin-top: ${rem(50)};

  @media (max-width: 900px) {
    margin-top: ${rem(30)};
  }
`

const TrainDecoration = styled(Train)`
  width: ${rem(153)};
  height: ${rem(83)};
`

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

  @media (max-width: 750px) {
    left: 50%;
    margin-left: ${rem(-135)};
  }
`;

const FooterList = styled.ul`
  list-style-type: none;
  font-weight: ${boldWeight};
  font-size: ${fontSizes[2]}
  margin: ${rem(10)} 0;
  padding: 0;
`;

const FooterWrapper = styled.div`
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

const Note = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  color: ${white.opacity(.5).toString()};

  > span {
    margin: 0 ${rem(30)} ${rem(10)};
  }
`

const location = [ -0.086997, 51.527284 ]

const Footer = () => (
  <Container>
    <Note>
      <TrainDecoration/>

      <span>
        This meetup is proudly sponsored by Trainline. See you at the event!
      </span>
    </Note>

    <FooterWrapper>
      {/*<NoScript/>*/}
      <Map/>
      <Shadow/>

      <FooterCard>
        <Link href="https://thetrainline.com" target="_blank" rel="noopener">
          <TrainlineLogo/>
        </Link>

        <FooterList>
          <li>WeWork Old St.</li>
          <li>18-21 Corsham Street</li>
          <li>N1 6DR London</li>
        </FooterList>

        <CityMapper href="https://citymapper.com/go/ad21yy" target="_blank" rel="noopener">
          Get Directions
        </CityMapper>
      </FooterCard>
    </FooterWrapper>
  </Container>
)

export default Footer


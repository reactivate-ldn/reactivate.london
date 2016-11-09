import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

import rem from '../styles/rem'
import { fontSizes, regularWeight } from '../styles/fonts'
import { navy } from '../styles/colors'

import Button from './base/button'
import Strip from './base/strip'
import Container from './base/container'

const ColumnWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: ${rem(30)};
`

const Column = styled.div`
  flex-grow: 1;
  margin-left: 20px;
`

const FirstColumn = styled(Column)`
  max-width: ${rem(200)};
  margin-left: 0px;
`

const List = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`

const Description = styled.div`
  font-size: ${fontSizes[4]};
  max-width: 70%;
  min-width: ${rem(550)};
  font-weight: ${regularWeight};
  margin-top: ${rem(60)};
`

const CoverH1 = styled.h1`
  font-size: ${fontSizes[6]};
  line-height: ${fontSizes[6]};
  margin: 0;
`

const CoverH2 = styled.h2`
  max-width: ${rem(160)};
  color: ${navy.lighten(0.25)};
`

const BackgroundImage = styled.div`
  position: absolute;
  right: 0px;
  top: 20px;
  height: 65%;
  width: 100%;
  opacity: 0.2;
  user-select: none;
  pointer-events: none;

  background-image: url('/static/Logo.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 100% 0%;
`

const Link = styled.a`
  text-decoration: underline;
  color: inherit;
`

const Cover = () => (
  <Container>
    <BackgroundImage/>

    <CoverH2>The Futuractive London Meetup</CoverH2>
    <ColumnWrapper>
      <FirstColumn>
        <CoverH1>Dec</CoverH1>
        <CoverH1>6th</CoverH1>
      </FirstColumn>
      <Column>
        <Strip/>
        <List>
          <li>7pm - 8pm</li>
          <li>(doors open 6pm)</li>
          <li>Tuesday, December 6th</li>
          <li>Trainline HQ</li>
          <li>
            <Link href="https://citymapper.com/go/gvab8p" target="_blank">
              Floor 3, 120 Holborn, EC1N 2TD
            </Link>
          </li>
        </List>
      </Column>
    </ColumnWrapper>
    <Button>Join</Button>
    <Description>
      Join us for our first meetup with talks ranging from React all the way to JavaScript and Functional Programming.
      Pizza and drinks on the house, of course!
    </Description>
  </Container>
)

export default Cover


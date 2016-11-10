import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

import rem from '../styles/rem'
import { fontSizes, regularWeight } from '../styles/fonts'
import { navy } from '../styles/colors'

import Button from './base/button'
import Strip from './base/strip'
import Container from './base/container'
import Headline from './base/headline'

const ColumnWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: ${rem(30)};

  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

const Level = styled.div`
  z-index: 1;
`

const Column = styled.div`
  margin-left: 20px;

  @media (max-width: 450px) {
    margin-top: 20px;
    margin-left: 0;
  }
`

const FirstColumn = styled(Column)`
  max-width: ${rem(200)};
  margin-left: 0px;
`

const List = styled.ul`
  list-style-type: none;
  line-height: 1.4;
  padding: 0;
`

const Description = styled.div`
  font-size: ${fontSizes[4]};
  max-width: 70%;
  min-width: ${rem(550)};
  font-weight: ${regularWeight};
  margin-top: ${rem(60)};

  @media (max-width: 750px) {
    font-size: ${rem(36)};
    min-width: 100%;
    width: 100%;
  }

  @media (max-width: 450px) {
    font-size: ${rem(30)};
  }
`

const CoverHeadline = styled(Headline)`
  margin: 0;
`

const Title = styled.h2`
  max-width: ${rem(160)};
  color: ${navy.lighten(0.25)};
`

const BackgroundImage = styled.div`
  position: fixed;
  right: 0px;
  top: 20px;
  height: 65vh;
  width: 100%;
  opacity: 0.7;
  user-select: none;
  pointer-events: none;

  background-image: url('/static/Logo.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 100% 0%;

  z-index: -1;

  @media (max-width: 850px) {
    position: absolute;
    opacity: 0.2;
  }
`

const Link = styled.a`
  text-decoration: underline;
  color: inherit;
`

const Cover = () => (
  <Container>
    <BackgroundImage/>

    <Level>
      <Title>The Reactivate London Meetup</Title>

      <ColumnWrapper>
        <FirstColumn>
          <CoverHeadline>
            Dec
            <br/>
            6th
          </CoverHeadline>
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
    </Level>
  </Container>
)

export default Cover


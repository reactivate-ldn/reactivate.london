import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

import rem from '../styles/rem'
import { fontSizes, regularWeight } from '../styles/fonts'
import { navy } from '../styles/colors'

import Button from './base/button'
import Strip from './base/strip'

const CoverWrapper = styled.div`
  margin-top: ${rem(80)};
`

const ColumnWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: ${rem(30)};
  z-index: 2;
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
  max-width: ${rem(600)};
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
  color: ${navy.lighten(0.2)};
`

const BackgroundImage = styled.img`
  position: absolute;
  right: 0px;
  top: 20px;
  height: 65%;
  opacity: 0.2;
  user-select: none;
  z-index: 1;
`

const LastListItem = styled.li`
  text-decoration: underline;
`

const Cover = () => (
  <CoverWrapper>
    <BackgroundImage src="/static/Logo.png"/>
    <CoverH2>The Futuractive London Meetup</CoverH2>
    <ColumnWrapper>
      <FirstColumn>
        <CoverH1>Dec</CoverH1>
        <CoverH1>6th</CoverH1>
      </FirstColumn>
      <Column>
        <Strip/>
        <List>
          <li>6pm - 10pm</li>
          <li>(doors open 18:45)</li>
          <li>Tuesday, December 6th</li>
          <li>Trainline HQ</li>
          <LastListItem>120 Holborn, Floor 3, EC1N 2TD</LastListItem>
        </List>
      </Column>
    </ColumnWrapper>
    <Button>Join</Button>
    <Description>
      Join us for our first meetup with talks ranging from React all the way to JavaScript and Functional Programming.
      Pizza and drinks on the house, of course!
    </Description>
  </CoverWrapper>
)

export default Cover


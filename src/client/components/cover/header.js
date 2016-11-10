import React from 'react'
import styled from 'styled-components'

import rem from '../../styles/rem'
import { fontSizes, regularWeight } from '../../styles/fonts'

import Strip from '../base/strip'
import Headline from '../base/headline'

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

const Link = styled.a`
  text-decoration: underline;
  color: inherit;
`

const CoverHeadline = styled(Headline)`
  margin: 0;
`

const Header = () => (
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
)

export default Header


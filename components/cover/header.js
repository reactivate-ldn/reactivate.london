import React from 'react'
import styled from 'styled-components'

import rem from '../../styles/rem'
import { fontSizes, regularWeight } from '../../styles/fonts'

import Strip from '../base/strip'
import Headline from '../base/headline'
import Link from '../base/link'
import SlackBadge from '../base/slack-badge'

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

const CoverHeadline = styled(Headline)`
  margin: 0;
`

const SlackBadgeWrapper = styled.li`
  padding-top: ${rem(10)};
`

const Header = () => (
  <ColumnWrapper>
    <FirstColumn>
      <CoverHeadline>
        Apr
        <br/>
        27th
      </CoverHeadline>
    </FirstColumn>
    <Column>
      <Strip/>
      <List>
        <li>6:30pm - 8:30pm</li>
        <li>(doors open 6:00pm)</li>
        <li>Monday, March 27th</li>
        <li>WeWork Old St.</li>
        <li>
          <Link href="https://citymapper.com/go/ad21yy" target="_blank" rel="noopener">
            18-21 Corsham Street, N1 6DR
          </Link>
        </li>

        <SlackBadgeWrapper>
          <SlackBadge />
        </SlackBadgeWrapper>
      </List>
    </Column>
  </ColumnWrapper>
)

export default Header


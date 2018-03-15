import React from 'react'
import styled from 'styled-components'

import rem from '../../styles/rem'
import { fontSizes, regularWeight } from '../../styles/fonts'

import Strip from '../base/strip'
import Headline from '../base/headline'
import Link from '../base/link'
import SlackBadge from '../base/slack-badge'
import { date, details, venue } from '../../assets/meta.json'

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

const FirstColumn = styled(Column) `
  margin-left: 0px;
`

const List = styled.ul`
  list-style-type: none;
  line-height: 1.4;
  padding: 0;
`

const CoverHeadline = styled(Headline) `
  margin: 0;
`

const SlackBadgeWrapper = styled.li`
  padding-top: ${rem(10)};
`

// Don't judge :P
const dateMarkup = {
  __html: date
    .split(' ')
    .join('<br />')
}

const Header = () => (
  <ColumnWrapper>
    <FirstColumn>
      <CoverHeadline dangerouslySetInnerHTML={dateMarkup} />
    </FirstColumn>
    <Column>
      <Strip />
      <List>
        {
          details.map((text, i) => (
            <li key={i}>{text}</li>
          ))
        }

        <li>{venue.name}</li>

        <li>
          <Link
            href={venue.citymapperLink}
            target="_blank"
            rel="noopener"
          >
            {venue.street}, {venue.postcode}
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


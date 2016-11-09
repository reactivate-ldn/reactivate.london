import React, { Component, PropTypes } from 'react'
import Button from './base/button';
import styled from 'styled-components';

const CoverWrapper = styled.div`
  color: white;
`;

const ColumnWrapper = styled.div`
  display: flex;
`;

const Column = styled.div`
  flex: 1;
`;

const List = styled.ul`
  list-style-type: none;
`;

const Description = styled.div`

`;

export default class Cover extends React.PureComponent {
  render() {
    return (
      <CoverWrapper>
        <h2>The Futuractive London Meetup</h2>
        <ColumnWrapper>
          <Column>
            <h1>Dec</h1>
            <h1>6th</h1>
          </Column>
          <Column>
            <List>
              <li>6pm - 10pm</li>
              <li>(doors open 18:45)</li>
              <li>Tuesday, December 6th</li>
              <li>Trainline HQ</li>
              <li>120 Holborn, Floor 3, EC1N 2TD</li>
            </List>
          </Column>
        </ColumnWrapper>
        <Button>Join</Button>
        <Description>
          Join us for our first meetup with talks ranging from React all the way to JavaScript and Functional Programming.
          Pizza and drinks on the house, of course!
        </Description>
      </CoverWrapper>
    );
  }
}

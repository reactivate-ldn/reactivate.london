import 'sanitize.css/sanitize.css'
import './main.css'

import React, { Component, PropTypes } from 'react'

import styled from 'styled-components'
import rem from './styles/rem';

import Container from './components/container'
import Section from './components/section'
import Header1 from './components/h1'
import Header3 from './components/h3'
import Button from './components/button'
import Wrapper from './components/wrapper'
import Card from './components/card'

const Title = styled(Header1)`
  margin: ${rem(55)} 0;
`

const Header = styled(Header3)`
  width: ${rem(430)};
`

const JoinButton = styled(Button)`
  margin: ${rem(66)} 0;
`

export default class App extends Component {
  render() {
    return (
      <Container>
        <Section>
          <Title>
            The Futuractive London Meetup
          </Title>
          <Header>
            A brand new meetup for all things React, JavaScript and Functional (Reactive) Programming!
          </Header>
          <JoinButton>
            Join
          </JoinButton>

          <Wrapper>
            <Card>
              Hello World!
            </Card>
          </Wrapper>
        </Section>
      </Container>
    )
  }
}


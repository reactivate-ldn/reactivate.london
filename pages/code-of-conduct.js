import React, { Component } from 'react'
import styled from 'styled-components'

import Container from '../components/base/container'
import Strip from '../components/base/strip'
import Headline from '../components/base/headline'

import { fontSizes } from '../styles/fonts'
import rem from '../styles/rem'
import { navy } from '../styles/colors'

const Text = styled.p`
  font-size: ${fontSizes[2]};
  margin: ${rem(35)} 0 ${rem(25)};
`

const Heading = styled.p`
  font-size: ${fontSizes[3]};
  margin: ${rem(35)} 0 ${rem(25)};
`

const Footprint = styled.small`
  font-size: ${fontSizes[1]};
  margin: ${rem(40)} 0 ${rem(35)};
  color: ${navy.lighten(0.25).toString()};
`

const Link = styled.a`
  color: inherit;
  text-decoration: underline;
`

export default class CodeOfConduct extends Component {
  render() {
    return (
      <Container>
        <Headline>Code of Conduct</Headline>
        <Strip />

        <Text>
          All attendees, speakers, sponsors and volunteers at our events are required to agree with the following code of conduct.
          Organisers will enforce this code throughout the event. We expect cooperation from all participants to help ensure a safe
          environment for everybody.
        </Text>

        <Heading>Need Help?</Heading>

        <Text>
          You can contact us at any time.
          You have our contact details in the emails we've sent.
        </Text>

        <Heading>The Quick Version</Heading>

        <Text>
          Our events are dedicated to providing a harassment-free experience for everyone, regardless of:

          <ul>
            <li>gender,</li>
            <li>gender identity and expression,</li>
            <li>age,</li>
            <li>sexual orientation,</li>
            <li>disability,</li>
            <li>physical appearance,</li>
            <li>body size,</li>
            <li>race,</li>
            <li>ethnicity,</li>
            <li>religion (or lack thereof),</li>
            <li>or technology choices.</li>
          </ul>

          We do not tolerate harassment of participants in any form.
          Sexual language and imagery is not appropriate for any event venue, including talks, workshops, parties, and social media.<br />
          Participants violating these rules may be sanctioned or expelled from the event, or even all future events,
          without compensation at the discretion of the organisers.
        </Text>

        <Heading>The Less Quick Version</Heading>

        <Text>
          Harassment includes:

          <ul>
            <li>offensive verbal comments related to genderc,</li>
            <li>gender identity and expression,</li>
            <li>age,</li>
            <li>sexual orientation,</li>
            <li>disability,</li>
            <li>physical appearance,</li>
            <li>body size,</li>
            <li>race,</li>
            <li>ethnicity,</li>
            <li>religion,</li>
            <li>technology choices,</li>
            <li>sexual images in public spaces,</li>
            <li>deliberate intimidation,</li>
            <li>stalking,</li>
            <li>following,</li>
            <li>harassing photography or recording,</li>
            <li>sustained disruption of talks or other events,</li>
            <li>inappropriate physical contact,</li>
            <li>and unwelcome sexual attention.</li>
          </ul>
        </Text>

        <Text>
          Participants asked to stop any harassing behavior are expected to comply immediately.
        </Text>

        <Text>
          Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use sexualised images,
          activities, or other material. Staff (including volunteers) must not use sexualised clothing/uniforms/costumes,
          or otherwise create a sexualised environment.
        </Text>

        <Text>
          If a participant engages in harassing behavior, the organisers may take any action they deem appropriate,
          including warning the offender or expulsion from the event — or in extreme cases including all future events — with
          no compensation.
        </Text>

        <Text>
          If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a
          member of staff or the organisers immediately.
        </Text>

        <Text>
          We are happy to help participants contact security or local law enforcement, provide escorts, or otherwise assist
          those experiencing harassment to feel safe for the duration of our events. We value your attendance.
        </Text>

        <Text>
          We expect participants to follow these rules at all our events and on social media.
        </Text>

        <Strip />
        <Footprint>
          {'This document is based on the '}
          <Link
            href="http://confcodeofconduct.com/"
            target="_blank"
            rel="noopener"
          >
            "Conference Code of Conduct"
          </Link>

          {' and is licensed under '}
          <Link
            href="https://creativecommons.org/licenses/by/3.0/deed.en_US"
            target="_blank"
            rel="noopener"
          >
            CC BY 3.0.
          </Link>
        </Footprint>
      </Container>
    )
  }
}

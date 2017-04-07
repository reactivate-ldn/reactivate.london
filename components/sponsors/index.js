import React from 'react'
import styled from 'styled-components'

import Headline from '../base/headline'
import Strip from '../base/strip'
import Container from '../base/container'
import rem from '../../styles/rem'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: ${rem(30)} ${rem(-30)};
`

const Logo = styled.div`
  background-image: url('${p => p.src}');
  background-size: contain;
  width: ${rem(200)};
  height: ${rem(80)};
  margin: ${rem(30)};
`

const Sponsors = () => (
  <Container>
    <Headline>Sponsors</Headline>
    <Strip/>

    <Row>
      <a href="https://engineering.thetrainline.com/" target="_blank" rel="noopener">
        <Logo src="/static/Trainline.png" />
      </a>

      <a href="https://formidable.com/" target="_blank" rel="noopener">
        <Logo src="/static/Formidable.png" />
      </a>
    </Row>
  </Container>
)

export default Sponsors


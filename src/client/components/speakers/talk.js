import React from 'react'
import styled from 'styled-components'

import rem from '../../styles/rem'
import Card from '../base/card'
import { mint, navy } from '../../styles/colors'
import { boldWeight, fontSizes } from '../../styles/fonts'

const TalkContainer = styled(Card)`
  margin: 0 ${rem(15)} ${rem(25)};

  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 ${rem(15)} ${rem(45)};
  }
`

const Avatar = styled.img`
  width: ${rem(100)};
  height: ${rem(100)};
  border-radius: 50%;
  margin-bottom: ${rem(9)};
`

const Name = styled.a`
  display: block;
  font-size: ${fontSizes[3]};
  font-weight: ${boldWeight};
  text-decoration: underline;
  color: ${mint.toString()};
  margin: 0;
  margin-bottom: ${rem(9)};
`

const Title = styled.h5`
  font-size: ${fontSizes[2]};
  color: ${navy.toString()};
  margin: 0;
  margin-bottom: ${rem(9)};
`

const Text = styled.p`
  font-size: ${fontSizes[1]};
  margin: 0;
`

const Talk = ({ avatar, name, title, text, link }) => (
  <TalkContainer>
    <Avatar src={avatar}/>
    <Name href={link} target="_blank">{name}</Name>
    <Title>{title}</Title>
    <Text>
      {
        text
          .split('\n')
          .reduce((acc, text, key) => acc
            .concat([
              <br key={key}/>,
              text
            ]),
          [])
          .slice(1)
      }
    </Text>
  </TalkContainer>
)

export default Talk


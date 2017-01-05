import React from 'react'
import styled from 'styled-components'

import rem from '../../styles/rem'
import { white } from '../../styles/colors'
import { regularWeight, fontSizes } from '../../styles/fonts'
import Slot from '../base/slot'
import SubmitTalkButton from './submit-talk-button'

const SlotContainer = styled(Slot)`
  margin: 0 ${rem(15)} ${rem(25)};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 ${rem(15)} ${rem(45)};
  }
`

const SlotTitle = styled.h1`
  font-size: ${fontSizes[6]};
  margin: 0;
`

const SlotText = styled.h4`
  color: ${white.opacity(.75)};
  font-size: ${fontSizes[3]};
  font-weight: ${regularWeight};
  text-align: center;
  margin: 0 0 ${rem(10)};
`
const SpeakersSlot = ({ title, hasSubmit, children }) => (
  <SlotContainer>
    <SlotTitle>
      {title}
    </SlotTitle>

    <SlotText>
      {children}
    </SlotText>

    {
      hasSubmit && <SubmitTalkButton/>
    }
  </SlotContainer>
)

export default SpeakersSlot

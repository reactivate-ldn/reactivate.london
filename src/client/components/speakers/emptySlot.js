import styled from 'styled-components'
import rem from '../../styles/rem'
import Slot from '../base/slot'

const EmptySlot = styled.div`
  margin: 0 ${rem(15)} ${rem(25)};

  @media (max-width: 750px) {
    margin: 0 ${rem(15)} ${rem(45)};
  }
`

export default EmptySlot

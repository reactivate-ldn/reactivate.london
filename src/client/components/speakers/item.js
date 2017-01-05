import React from 'react'

import Slot from './slot'
import Talk from './talk'

const SpeakersItem = ({ free, lightning, tba, ...talk }) => {
  if (free) {
    return (
      <Slot title="?" hasSubmit>
        {
          `Are you interested in speaking? This ${lightning ? 'lightning talk' : ''} slot could be yours!`
        }
      </Slot>
    )
  }

  if (tba) {
    return (
      <Slot title="TBA">
        Someone is preparing an awesome talk, but it isn't quite ready yet...
      </Slot>
    )
  }

  return <Talk {...talk}/>
}

export default SpeakersItem

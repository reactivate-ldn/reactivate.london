import React from 'react'
import GoogleMap from 'google-map-react'
import styled from 'styled-components'

import rem from '../../styles/rem'
import { shallowShadow } from '../../styles/shadows'
import { white } from '../../styles/colors';

const location = {
  lat: 51.51801416452366,
  lng: -0.10818421840667725
}

const createMapOptions = maps => ({
  zoomControlOptions: {
    style: maps.ZoomControlStyle.SMALL
  },
  scrollwheel: false,
  draggableCursor: 'default'
})

const EmojiPin = styled.div`
  width: ${rem(36)};
  height: ${rem(36)};
  margin-left: ${rem(-18)};
  margin-top: ${rem(-18)};
  border-radius: 50%;

  background-color: ${white};
  background-image: url('/static/Marker.png');
  background-size: ${rem(24)} ${rem(24)};
  background-position: center;
  box-shadow: ${shallowShadow};
`

const Map = () => (
  <GoogleMap
    options={createMapOptions}
    center={location}
    zoom={15}
  >
    <EmojiPin {...location}/>
  </GoogleMap>
)

export default Map


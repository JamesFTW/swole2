import * as React from 'react'
import { Image } from 'react-native'

function Photo({
  styles,
  uri
}) {
  return(
    <Image 
      source={{uri: uri}}
      style={styles}>
    </Image>
  )
}

export default Photo
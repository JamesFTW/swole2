import * as React from 'react'
import { Image as NativeImage } from 'react-native'
import styles from './Image.styles'

export function Image({
  src,
}) {
  //set up ability to store images to local storage and reterive them if they exist in local storage
  //might also need a way to delete images from local storage after a certain amount of time
  return (
    <NativeImage 
      source={{uri: src}}
      style={styles.image}>
    </NativeImage>
  )
}
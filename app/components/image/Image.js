import * as React from 'react'
import { Image as NativeImage } from 'react-native'
import styles from './Image.styles'
const placeHolder = 'https://cdn.shopify.com/s/files/1/1876/4703/articles/shutterstock_1079398565_2560x.jpg?v=1591108584'

export function Image({
  src = placeHolder,
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
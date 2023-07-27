import React from "react"
import { View, TouchableOpacity } from "react-native"
import CloseX from './close_x.svg'

import styles from "./Close.styles"

export const Close = ({style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.close, style]}>
      <CloseX />
    </TouchableOpacity>
  )
}
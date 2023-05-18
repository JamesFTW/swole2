import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './TextButton.styles'

export function TextButton({
  onPress,
  children,
  marginRight,
  marginTop,
  marginLeft,
  marginBottom
}) {
  return (
    <TouchableOpacity style={[styles.button, {
      marginRight,
      marginTop,
      marginLeft,
      marginBottom
    }]} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}
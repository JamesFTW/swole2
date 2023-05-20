import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export function TextButton({
  onPress,
  children,
  marginRight,
  marginTop,
  marginLeft,
  marginBottom,
  style
}) {
  return (
    <TouchableOpacity style={{
      marginRight,
      marginTop,
      marginLeft,
      marginBottom
    }} onPress={onPress}>
      <Text style={style}>{children}</Text>
    </TouchableOpacity>
  )
}
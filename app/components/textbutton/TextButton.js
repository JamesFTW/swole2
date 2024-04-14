import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export function TextButton({
  onPress,
  children,
  marginRight,
  marginTop,
  marginLeft,
  marginBottom,
  style,
  textStyle,
}) {
  return (
    <TouchableOpacity
      style={[
        {
          marginRight,
          marginTop,
          marginLeft,
          marginBottom,
        },
        style,
      ]}
      onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  )
}

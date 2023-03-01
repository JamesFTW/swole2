import * as React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export const Button = ({
  onPress = () => {},
  children = ""
}) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{children}</Text>
  </TouchableOpacity>
)

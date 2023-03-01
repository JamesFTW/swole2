import * as React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export const Action = ({
  onPress = () => {},
  children = ""
}) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{children}</Text>
  </TouchableOpacity>
)

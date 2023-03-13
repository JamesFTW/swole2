import * as React from 'react'
import { Text, Pressable } from 'react-native'
import styles from './Action.styles'


/**
 * 
 * TODO: Add implementation
 * 
 */

export function Action({
  onPress,
  children
}) {

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Chest</Text>
    </Pressable>
  )
}

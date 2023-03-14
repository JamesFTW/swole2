
import React from 'react'
import { View, Pressable } from 'react-native'
import styles from './Card.styles'

export function Card(props) {
  return (
    <Pressable style={styles.card}>
      <View {...props} style={styles.card_inner} />
    </Pressable>
  );
}
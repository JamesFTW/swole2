
import * as React from 'react'
import styles from './Card.styles'
import { View, Pressable } from 'react-native'
import { LAYOUT } from '../../constants'

export function Card({
  children,
  cardHeight = LAYOUT.SPACING_XL_88,
}) {
  
  return (
    <Pressable style={styles.card_container}>
      <View style={[styles.card_inner, { height: cardHeight }]}>
        { children }
      </View>
    </Pressable>
  );
}
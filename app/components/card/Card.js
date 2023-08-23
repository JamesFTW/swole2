
import * as React from 'react'
import styles from './Card.styles'
import { Pressable, Animated } from 'react-native'
import { LAYOUT, COLORS } from '../../constants'

export function Card({
  children,
  cardHeight = LAYOUT.SPACING_XL_88,
  borderRadius,
  backgroundColor = COLORS.WHITE_WHITE,
  onPress,
  style
}) {
  
  const borderRadiusValue =
    borderRadius
      ? LAYOUT.SPACING_XS_12
      : 0

  return (
    <Pressable 
      onPress={onPress} 
      style={[styles.card_container, 
        {borderRadius: borderRadiusValue, backgroundColor}, style]}>
      <Animated.View style={[styles.card_inner, { height: cardHeight }]}>
        { children }
      </Animated.View>
    </Pressable>
  )
}
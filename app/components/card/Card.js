
import * as React from 'react'
import styles from './Card.styles'
import { View, TouchableOpacity } from 'react-native'
import { LAYOUT, COLORS } from '../../constants'

export function Card({
  children,
  cardHeight = LAYOUT.SPACING_XL_88,
  borderRadius,
  backgroundColor = COLORS.WHITE_WHITE,
  onPress
}) {
  
  const borderRadiusValue =
    borderRadius
      ? LAYOUT.SPACING_XS_12
      : 0

  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.card_container, 
        {borderRadius: borderRadiusValue, backgroundColor}]}>
      <View style={[styles.card_inner, { height: cardHeight }]}>
        { children }
      </View>
    </TouchableOpacity>
  )
}
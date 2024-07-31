import React from 'react'
import { Pressable } from 'react-native'
import { COLORS } from '@constants'
import BackButtonSVG from './back_button.svg'

export const BackButton = ({ onPress, style, color = COLORS.PRIMARY_COLOR, width = 20, height = 15 }) => {
  return (
    <Pressable hitSlop={20} style={style} onPress={onPress}>
      <BackButtonSVG width={width} height={height} color={color} />
    </Pressable>
  )
}

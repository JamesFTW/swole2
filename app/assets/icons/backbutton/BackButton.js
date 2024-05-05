import React from 'react'
import BackButtonSVN from './back_button.svg'
import { Pressable } from 'react-native'

export const BackButton = ({ onPress, style }) => {
  return (
    <Pressable radius={10} style={style} onPressIn={onPress}>
      <BackButtonSVN />
    </Pressable>
  )
}

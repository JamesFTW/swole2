import React from 'react'
import BackButtonSVN from './back_button.svg'
import { Pressable } from 'react-native'

export const BackButton = ({ onPress, style }) => {
  return (
    <Pressable style={style} onPress={onPress}>
      <BackButtonSVN />
    </Pressable>
  )
}

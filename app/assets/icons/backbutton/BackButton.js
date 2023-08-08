import React from "react"
import BackButtonSVN from './back_button.svg'
import { TouchableOpacity } from "react-native"

export const BackButton = ({onPress, style}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <BackButtonSVN />
    </TouchableOpacity>
  )
}
import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { LAYOUT } from '../../constants'
import { FlexContainer } from '../../layout'
import styles from './Button.styles'

//Edit this so styles are more general.

export function Button({
  onPress,
  title,
  icon,
  outline,
  marginRight,
  marginTop,
  marginLeft,
  marginBottom,
  style,
  textStyle
}) {
  if (outline) {
    return (
      <TouchableOpacity style={[styles.buttonOutline, {
        marginRight,
        marginTop,
        marginLeft,
        marginBottom,
      }, style]} onPress={onPress}>
        <FlexContainer direction={LAYOUT.FLEX_ROW}>
          {icon}
          <Text style={[styles.textOutline, textStyle]}>{title}</Text>
        </FlexContainer>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}
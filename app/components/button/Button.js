import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { LAYOUT } from '../../constants'
import { FlexContainer } from '../../layout'
import styles from './Button.styles'

export function Button({
  onPress,
  title,
  icon,
  outline,
  marginRight,
  marginTop,
  marginLeft,
  marginBottom
}) {
  if (outline) {
    return (
      <TouchableOpacity style={[styles.buttonOutline, {
        marginRight,
        marginTop,
        marginLeft,
        marginBottom
      }]} onPress={onPress}>
        <FlexContainer alignItems={LAYOUT.ALIGN_CENTER} direction={LAYOUT.FLEX_ROW}>
          {icon}
          <Text style={styles.textOutline}>{title}</Text>
        </FlexContainer>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
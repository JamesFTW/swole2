import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { COLORS, FONTS, LAYOUT } from '../../constants'
import { FlexContainer } from '../../layout'

export function Button(props) {
  const {
    onPress,
    title,
    icon,
    outline
  } = props

  if (outline) {
    return (
      <TouchableOpacity style={styles.buttonOutline} onPress={onPress}>
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

const styles = StyleSheet.create({
  buttonOutline: {
    backgroundColor: COLORS.WHITE,
    justifyContent: LAYOUT.ALIGN_CENTER,
    borderColor: COLORS.PRIMARY_COLOR,
    borderWidth: 1,
    height: LAYOUT.SPACING_MD_48,
    borderRadius: 10,
    marginLeft: LAYOUT.SPACING_S_20,
    marginRight: LAYOUT.SPACING_S_20,
  },
  textOutline: {
    fontSize: FONTS.SIZE_16,
    fontFamily: FONTS.SFPRO_MEDIUM,
    color: COLORS.PRIMARY_COLOR,
    justifyContent: LAYOUT.ALIGN_CENTER,
    alignItems: LAYOUT.ALIGN_CENTER,
    lineHeight: LAYOUT.SPACING_MD_48,
    marginLeft: LAYOUT.SPACING_LG_64
  },
  button: {
    backgroundColor: COLORS.PRIMARY_COLOR,
    alignItems: LAYOUT.ALIGN_CENTER,
    justifyContent: LAYOUT.ALIGN_CENTER,
    borderColor: COLORS.PRIMARY_COLOR,
    borderWidth: 1,
    height: LAYOUT.SPACING_MD_48,
    borderRadius: 10,
    marginLeft: LAYOUT.SPACING_S_20,
    marginRight: LAYOUT.SPACING_S_20,
  },
  text: {
    fontSize: FONTS.SIZE_16,
    fontFamily: FONTS.SFPRO_MEDIUM,
    color: COLORS.WHITE,
    justifyContent: LAYOUT.ALIGN_CENTER,
    alignItems: LAYOUT.ALIGN_CENTER,
    lineHeight: LAYOUT.SPACING_MD_48,
    letterSpacing: 0.125,
  },
});
import * as React from 'react'
import { Text, Pressable, View } from 'react-native'
import { COLORS } from '../../constants'
import styles from './Action.styles'

const ACTION_BUTTON_COLORS = {
  CHEST: '#0F2560',
  BACK: '#5F4A8B',
  SHOULDERS: '#00203F',
  LEGS: '#01539D',
  TRICEPS: '#CE1141',
  LATS: '#5A2D81',
  HAMSTRINGS: COLORS.BLACK,
  ABS: '#860038',
  BICEPS: '#12173F',
  GLUTES: '#1D1160',
  CALVES: '#A23E48',
}
const ACTION_TEXT_COLORS = {
  CHEST: '#F1D702',
  BACK: '#E69A8D',
  SHOULDERS: '#ADF0D1',
  LEGS: '#FFD662',
  TRICEPS: COLORS.WHITE,
  LATS: COLORS.WHITE,
  HAMSTRINGS: COLORS.WHITE,
  ABS: '#FDBB30',
  BICEPS: '#F5B112',
  GLUTES: '#BEC0C2',
  CALVES: '#FFF275',
}

export function Action({
  onPress,
  actionTitle,
  marginRight,
  marginLeft,
  marginTop,
  marginBottom,
}) {
  const actionTitleToUpperCase = actionTitle.toUpperCase()

  return (
    <Pressable
      style={[
        styles.action_container,
        {
          backgroundColor: ACTION_BUTTON_COLORS[actionTitleToUpperCase],
          marginRight,
          marginLeft,
          marginTop,
          marginBottom,
        },
      ]}
      onPress={onPress}>
      <View style={[styles.action_inside]}>
        <Text
          style={[
            styles.action_title,
            { color: ACTION_TEXT_COLORS[actionTitleToUpperCase] },
          ]}>
          {actionTitleToUpperCase}
        </Text>
      </View>
    </Pressable>
  )
}

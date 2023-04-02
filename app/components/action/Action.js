import * as React from 'react'
import { Text, Pressable, View } from 'react-native'
import styles from './Action.styles'

const ACTION_BUTTON_COLORS = {
  'CHEST': '#0F2560',
  'BACK': '#5F4A8B',
  'SHOULDERS': '#00203F',
  'LEGS': '#01539D'
}
const ACTION_TEXT_COLORS = {
  'CHEST': '#F1D702',
  'BACK': '#E69A8D',
  'SHOULDERS': '#ADF0D1',
  'LEGS': '#FFD662'
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
      style={[styles.action_container, {
        'backgroundColor': ACTION_BUTTON_COLORS[actionTitleToUpperCase],
        marginRight,
        marginLeft,
        marginTop,
        marginBottom,
      }]}
      onPress={onPress}>
      <View style={[styles.action_inside]}>
        <Text
          style={[styles.action_title,
            {'color': ACTION_TEXT_COLORS[actionTitleToUpperCase]}]}>
            { actionTitleToUpperCase }
        </Text>
      </View>
    </Pressable>
  )
}
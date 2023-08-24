import * as React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Checkmark } from '../../assets/icons'

import styles from './StatusIndicator.styles'

export function StatusIndicator({isCompleted}) {
  return (
    <View style={
      isCompleted
        ? styles.day_of_week_indicator_completed 
        : styles.day_of_week_indicator
      }>
      { isCompleted ? <Checkmark/> : null }
    </View>
  )
}
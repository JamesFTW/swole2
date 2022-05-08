import * as React from 'react'
import { View, Text } from 'react-native'
import styles from './WorkoutHeader.styles'

function WorkoutHeader({
  workoutTitle,
  workoutDate
}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.flexContent}>
          <Text style={styles.workoutTitle}>{workoutTitle}</Text>
          <Text style={styles.workoutDate}>{workoutDate}</Text>
        </View>
      </View>
    </View>
  )
}

export default WorkoutHeader
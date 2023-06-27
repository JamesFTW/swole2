import * as React from 'react'
import { View, Text } from 'react-native'
import styles from './WeekAtGlanceWorkout.styles'
import { TextButton } from '../../../components'

export const WeekAtGlanceWorkoutRoute = "WeekAtGlanceWorkoutRoute"

/**
 * 
 *Need to rename/move this to the profile page.  This is profile specific workouts
 */


export function WeekAtGlanceWorkout({workoutId, route, navigation}) {
  //check if id is cached in async storage.  if not fetch then store
  const { workoutInfo } = route.params
  return (
    <View style={{marginTop: 100}}>
      <TextButton
          onPress={() => navigation.goBack()}
          // marginTop={LAYOUT.SPACING_S_28}
          style={styles.backButton}>
            Back
        </TextButton>
      <Text>This is a workout for {workoutInfo.day}</Text>
    </View>
  )
}

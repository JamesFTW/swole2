import * as React from 'react'
import { View, Text } from 'react-native'
import styles from './ExerciseDetails.styles'
import { TextButton } from '../../../components'

export const ExerciseDetailsRoute = "ExerciseDetailsRoute"

/**
 * 
 *Need to rename/move this to the profile page.  This is profile specific workouts
 */


export function ExerciseDetails({workoutId, route, navigation}) {
  /**
   * I'll probably want to fetch the exercise info by id
   */
  const { exerciseInfo } = route.params
  console.log(exerciseInfo)
  return (
    <View style={{marginTop: 100}}>
      <TextButton
          onPress={() => navigation.goBack()}
          // marginTop={LAYOUT.SPACING_S_28}
          style={styles.backButton}>
            Back
        </TextButton>
      <Text>This is an exercise card for {exerciseInfo.exerciseTitle} </Text>
    </View>
  )
}

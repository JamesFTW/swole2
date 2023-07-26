import React from 'react'
import { View, Text } from 'react-native'
import { Image } from '../../../components'
import { ScrollContent, FlexContainer } from '../../../layout'
import styles from './ExerciseDetails.styles'

export const ExerciseDetailsRoute = "ExerciseDetailsRoute"

/**
 * Need to figure out what to do with long exercise titles
 */

export function ExerciseDetails({workoutId, route, navigation}) {
  /**
   * I'll probably want to fetch the exercise info by id
   */
  const { exerciseInfo } = route.params
  /**
   * Need a hook that pulls if you have done this exercise before
   * ** if so populate last attempts and total weight moved
   */

  return (
    <ScrollContent>
      <View>
        <Image style={styles.exercise_image} src={exerciseInfo.exerciseImage}></Image>
      </View>
      <FlexContainer direction='row'>
        <FlexContainer direction='column' marginTop={21}>
        <Text style={styles.exercise_title}>{exerciseInfo.exerciseTitle}</Text>
          <FlexContainer direction='row' marginLeft={16} >
            <Text style={styles.target_muscle}>{exerciseInfo.targetMuscle.toLowerCase()}</Text>
          </FlexContainer>
        </FlexContainer>
        <View style={styles.total_weight_container}>
          <Text style={styles.total_weight}>3000 lbs</Text>
          <Text style={styles.total_weight_subtitle}>total weight moved</Text>
        </View>
      </FlexContainer>
      <Text style={styles.exercise_description}>The barbell bench press is an upper body pressing drill that builds size and strength in the upper body, specifically in the chest, triceps, and shoulders</Text>
      <Text style={styles.last_attempts}>Last Atempts</Text>
    </ScrollContent>
  )
}

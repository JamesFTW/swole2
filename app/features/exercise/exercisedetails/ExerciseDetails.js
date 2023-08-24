import React from 'react'
import { View, Text } from 'react-native'
import { Image } from '../../../components'
import { ScrollContent, FlexContainer } from '../../../layout'
import { Close } from '../../../assets/icons'
import { useGetUserExercise } from '../../../lib/userexercises/hooks/'

import styles from './ExerciseDetails.styles'

export const ExerciseDetailsRoute = "ExerciseDetailsRoute"

/**
 * Need to figure out what to do with long exercise titles
 * I'll probably want to fetch the exercise info by id
 */

export function ExerciseDetails({route, navigation}) {
  const { exerciseInfo } = route.params
  const { data, isSuccess } = useGetUserExercise(exerciseInfo.exerciseId)
  let weightTotal = 0

  if (isSuccess) {
    data.userExercise.map((exercise) => {
      weightTotal += exercise.weightMoved
    })
  }

  return (
    <ScrollContent>
      <View>
        <Image style={styles.exercise_image} src={exerciseInfo.exerciseImage}/>
        <Close onPress={() => navigation.goBack()} style={{position: 'absolute', right: 0, marginTop: 45, marginRight: 15}}/>
      </View>
      <FlexContainer direction='row'>
        <FlexContainer direction='column' marginTop={21}>
        <Text style={styles.exercise_title}>{exerciseInfo.exerciseTitle}</Text>
          <FlexContainer direction='row' marginLeft={16} >
            <Text style={styles.target_muscle}>{exerciseInfo.targetMuscle.toLowerCase()}</Text>
          </FlexContainer>
        </FlexContainer>
        <View style={styles.total_weight_container}>
          <Text style={styles.total_weight}>{ weightTotal } lbs</Text>
          <Text style={styles.total_weight_subtitle}>total weight moved</Text>
        </View>
      </FlexContainer>
      <Text style={styles.exercise_description}>The barbell bench press is an upper body pressing drill that builds size and strength in the upper body, specifically in the chest, triceps, and shoulders</Text>
      <Text style={styles.last_attempts}>Last Atempts</Text>
      {isSuccess? <LastAttemptMessage data={data}/> : null}
    </ScrollContent>
  )
}

function LastAttemptMessage({data}) {

  if (data.userExercise.length === 0) {
    return (
      <Text style={styles.exercise_first_attempt}> You have not attempted this exercise</Text>
    )
  }

  const attempts = data.userExercise.map((exercise) => {
    /**
     * Going to eventually want to sort these so the most recent is on top
     */
    const exerciseDate = new Date(exercise.createdAt)
    const year = exerciseDate.getFullYear()
    const date = exerciseDate.getDate()
    const month = exerciseDate.getMonth()
    const weightMoved = exercise.weightMoved
    const reps = exercise.reps

    return (
      <View style={{marginTop: 20}} key={exercise.userExerciseID}>
        <FlexContainer style={{justifyContent: 'space-between'}} direction='row'>
          <Text style={styles.exercise_last_attempt_date}>{month}-{date}-{year}</Text>
          <Text style={styles.exercise_last_attempt_rep}>{weightMoved}lbs x {reps} reps</Text>
        </FlexContainer>
      </View>
    )
  })

  return (
    <>
      {attempts}
    </>
  )
}

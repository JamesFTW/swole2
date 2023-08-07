import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FlexContainer, ScrollContent } from '../../layout'
import { Exercise } from '../../features'
import { StartNewWorkout } from '../../assets/icons'
import { useGetWorkoutPagePreviewExercises } from '../../lib/exercises/hooks/useGetWorkoutPagePreviewExercises'

import { ExerciseSearchScreenRoute } from './exercisesearchscreen/ExerciseSearchScreen'
import { StartNewWorkoutScreenRoute } from './startnewworkoutscreen/StartNewWorkoutScreen'
import { StartNewWorkoutStackRoute } from './startnewworkoutscreen'

import styles from './WorkoutScreen.styles'

export const WorkoutScreenRoute = "WorkoutScreenRoute"

export function WorkoutScreen({navigation}) {  
  const { data, isSuccess } = useGetWorkoutPagePreviewExercises()

  /**
   * Fetch display exercises.
   * Possibly make them suggested exercises.
   */
  const date = new Date()
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).replace(/\//g, '-')

  //check if id is cached in async storage.  if not fetch then store
  return (
    <ScrollContent
      useSafeArea
      showsVerticalScrollIndicator={false} 
      style={styles.workout_screen_container}
    >
      <Text style={styles.date}>{formattedDate}</Text>
      <Text style={styles.quote}>put in work. see results</Text>

      <TouchableOpacity onPress={() => 
        navigation.navigate(
          StartNewWorkoutStackRoute, {
            screen: StartNewWorkoutScreenRoute,
        })}>
        <FlexContainer style={styles.start_new_workout_container} direction="row">
          <StartNewWorkout/>
          <Text style={styles.start_new_workout}>Start New Workout</Text>
        </FlexContainer>
      </TouchableOpacity>

      <View style={styles.workout_plans_container}>
        <FlexContainer style={styles.workout_plans_component} direction='row'>
          <Text style={styles.workout_plans_title}>Workout Plans</Text>
          <TouchableOpacity>
            <Text style={styles.workout_plans_view_all}>view all</Text>
          </TouchableOpacity>
        </FlexContainer>
        <ScrollContent 
          style={{marginRight: -14}} 
          showsHorizontalScrollIndicator={false} 
          horizontal
        >
          {/** this needs to actually be designed */}
          <View style={styles.workout_card}></View>
          <View style={styles.workout_card}></View>
          <View style={styles.workout_card}></View>
          <View style={styles.workout_card}></View>
          <View style={styles.workout_card}></View>
        </ScrollContent>
      </View>

      <View style={styles.exercises_container}>
        <FlexContainer style={styles.exercises_component} direction='row'>
          <Text style={styles.workout_plans_title}>Exercises</Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate(ExerciseSearchScreenRoute)
          }}>
            <Text style={styles.workout_plans_view_all}>view all</Text>
          </TouchableOpacity>
        </FlexContainer>

        <View style={{marginBottom: 40}}>
          {isSuccess? data.previewExercises.map((exercise) => {
            return (
              <Exercise 
                exerciseImage={exercise.video} 
                exerciseTitle={exercise.exerciseName} 
                secondaryMuscles={exercise.secondaryMuscles}
                targetMuscle={exercise.targetMuscle}
                marginBottom={12}
                exerciseId={exercise.exerciseId}
                key={exercise.exerciseId}
              />
            )
          }): /** Add some type of loading state here*/<View></View>}
        </View>
      </View>
    </ScrollContent>
  )
}

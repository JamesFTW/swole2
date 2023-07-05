import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './WorkoutScreen.styles'
import { FlexContainer, ScrollContent } from '../../layout'
import { StartNewWorkout } from '../../assets/icons'
import { Exercise } from '../../features'

const placeHolder = 'https://cdn.shopify.com/s/files/1/1876/4703/articles/shutterstock_1079398565_2560x.jpg?v=1591108584'

export const WorkoutScreenRoute = "WorkoutScreenRoute"


const payload = [
  {
    id: 1,
    exerciseTitle: 'Barebell Deadlift',
    primaryMuscleGroups: ['legs'],
    placeHolderImage: placeHolder
  },
  {
    id: 2,
    exerciseTitle: 'Bulgarian Split Squat',
    primaryMuscleGroups: ['Legs', 'Back'],
    placeHolderImage: placeHolder
  },
  {
    id: 3,
    exerciseTitle: 'Arnold Press',
    primaryMuscleGroups: ['shoulders'],
    placeHolderImage: placeHolder
  },
  {
    id: 4,
    exerciseTitle: 'Front Squat',
    primaryMuscleGroups: ['legs'],
    placeHolderImage: placeHolder
  },
  {
    id: 5,
    exerciseTitle: 'Barebell Bench Press',
    primaryMuscleGroups: ['chest'],
    placeHolderImage: placeHolder
  },
]


export function WorkoutScreen({navigation}) {  
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

      <TouchableOpacity>
        <FlexContainer style={styles.start_new_workout_container} direction="row">
          <StartNewWorkout/>
          <Text style={styles.start_new_workout}>Start New Workout</Text>
        </FlexContainer>
      </TouchableOpacity>

      <View style={styles.workout_plans_container}>
        <FlexContainer style={styles.workout_plans_component} direction='row'>
          <Text style={styles.workout_plans_title}>Workout Plans</Text>
          <TouchableOpacity onPress={() => {console.log('clicked workout plans')}}>
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
          <TouchableOpacity onPress={() => {console.log('clicked exercises plans')}}>
            <Text style={styles.workout_plans_view_all}>view all</Text>
          </TouchableOpacity>
        </FlexContainer>

        <View style={{marginBottom: 40}}>
          {payload.map((exercise, i) => {
            return (
              <Exercise 
                exerciseImage={exercise.placeHolderImage} 
                exerciseTitle={exercise.exerciseTitle} 
                primaryMuscleGroup={exercise.primaryMuscleGroups}
                marginBottom={12}
                onPress={() => {console.log('pressed', exercise)}}
              />
            )
          })}
        </View>
      </View>
    </ScrollContent>
  )
}

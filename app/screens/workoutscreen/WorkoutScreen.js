import * as React from 'react'
import { ScrollContent } from '@layout'
import { CompletedWorkout, StartNewWorkout } from '@features'

export const WorkoutScreenRoute = 'WorkoutScreenRoute'

const data = {
  userName: 'jamesftw',
  workoutTime: 'Today at 11:00 am',
  location: 'Oakland, Ca',
  workoutTitle: 'Monday Morning Workout',
  totalVolume: '410 lbs',
  time: '2h 13m',
  calsBurned: '400 cal',
  primaryMusleGroup: 'Chest',
}

const data2 = {
  userName: 'jamesftw',
  workoutTime: 'Yesterday at 5:12 pm',
  location: 'Oakland, Ca',
  workoutTitle: 'Friday Evening Workout',
  totalVolume: '200 lbs',
  time: '0h 40m',
  calsBurned: '120 cal',
  primaryMusleGroup: 'Back',
}

const data3 = {
  userName: 'jamesftw',
  workoutTime: 'May 31, 2024 at 9:24 am',
  location: 'Oakland, Ca',
  workoutTitle: 'Saturday Evening Workout',
  totalVolume: '200 lbs',
  time: '0h 40m',
  calsBurned: '120 cal',
  primaryMusleGroup: 'Back',
}

const data4 = {
  userName: 'jamesftw',
  workoutTime: 'Yesterday at 11:10 am',
  location: 'Oakland, Ca',
  workoutTitle: 'Sunday Morning Workout',
  totalVolume: '200 lbs',
  time: '0h 40m',
  calsBurned: '120 cal',
  primaryMusleGroup: 'Back',
}

export function WorkoutScreen({ navigation }) {
  return (
    <ScrollContent showsVerticalScrollIndicator={false} useSafeArea style={{ height: '100%' }}>
      <StartNewWorkout navigation={navigation} />
      <CompletedWorkout data={data} />
      <CompletedWorkout data={data2} />
      <CompletedWorkout data={data3} />
      <CompletedWorkout data={data4} />
    </ScrollContent>
  )
}

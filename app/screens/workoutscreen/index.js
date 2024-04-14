import * as React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { WorkoutScreen, WorkoutScreenRoute } from './WorkoutScreen'
import {
  ExerciseDetails,
  ExerciseDetailsRoute,
} from '../../features/exercise/exercisedetails/ExerciseDetails'
import {
  ExerciseSearchScreen,
  ExerciseSearchScreenRoute,
} from './exercisesearchscreen/ExerciseSearchScreen'
import {
  StartNewWorkoutStack,
  StartNewWorkoutStackRoute,
} from './startnewworkoutscreen'

const Stack = createNativeStackNavigator()

export const WorkoutScreenStackRoute = 'WorkoutScreenStackRoute'

export function WorkoutScreenStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={WorkoutScreenRoute} component={WorkoutScreen} />
      <Stack.Screen name={ExerciseDetailsRoute} component={ExerciseDetails} />
      <Stack.Screen
        name={ExerciseSearchScreenRoute}
        component={ExerciseSearchScreen}
      />
      <Stack.Screen
        name={StartNewWorkoutStackRoute}
        component={StartNewWorkoutStack}
      />
    </Stack.Navigator>
  )
}

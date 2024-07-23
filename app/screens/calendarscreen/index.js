import * as React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CalendarScreen, CalendarScreenRoute } from './CalendarScreen'
import {
  ExerciseSearchScreen,
  ExerciseSearchScreenRoute,
} from '../workoutscreen/exercisesearchscreen/ExerciseSearchScreen'

const Stack = createNativeStackNavigator()

export const CalendarScreenStackRoute = 'CalendarScreenStackRoute'

export function CalendarScreenStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={CalendarScreenRoute} component={CalendarScreen} />
      <Stack.Screen name={ExerciseSearchScreenRoute} component={ExerciseSearchScreen} />
    </Stack.Navigator>
  )
}

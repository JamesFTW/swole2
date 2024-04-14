import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { WeekAtGlance, WeekAtGlanceRoute } from './WeekAtGlance'
import {
  WeekAtGlanceWorkout,
  WeekAtGlanceWorkoutRoute,
} from '../weekatglance/weekatglanceworkout/WeekAtGlanceWorkout'
import {
  MoreTraining,
  MoreTrainingRoute,
} from './weekatglanceworkout/MoreTraining'

const Stack = createNativeStackNavigator()
export const WeekAtGlanceStackRoute = 'WeekAtGlanceStackRoute'

//very basic router set up

export function WeekAtGlanceStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={WeekAtGlanceRoute} component={WeekAtGlance} />
      <Stack.Screen
        name={WeekAtGlanceWorkoutRoute}
        component={WeekAtGlanceWorkout}
      />
      <Stack.Screen name={MoreTrainingRoute} component={MoreTraining} />
    </Stack.Navigator>
  )
}

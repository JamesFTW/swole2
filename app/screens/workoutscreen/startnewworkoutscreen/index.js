import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  StartNewWorkoutScreen,
  StartNewWorkoutScreenRoute,
} from './StartNewWorkoutScreen'

const Stack = createNativeStackNavigator()
export const StartNewWorkoutStackRoute = 'StartNewWorkoutStackRoute'

export function StartNewWorkoutStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={StartNewWorkoutScreenRoute}
        component={StartNewWorkoutScreen}
      />
    </Stack.Navigator>
  )
}

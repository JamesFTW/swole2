import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ProfileScreen, ProfileScreenRoute } from './ProfileScreen'
import { WorkoutScreen, WorkoutScreenRoute } from '../workoutscreen/WorkoutScreen'
import { UserSettingsScreen, UserSettingsScreenRoute } from './usersettingsscreen/UserSettingsScreen'

const Stack = createNativeStackNavigator()
export const ProfileScreenStackRoute = 'ProfileScreenStackRoute'

//very basic router set up

export function ProfileScreenStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ProfileScreenRoute}
        component={ProfileScreen}
      />
      <Stack.Screen
        name={WorkoutScreenRoute}
        component={WorkoutScreen}
      />
      <Stack.Screen
        name={UserSettingsScreenRoute}
        component={UserSettingsScreen}
      />
    </Stack.Navigator>
  )
}
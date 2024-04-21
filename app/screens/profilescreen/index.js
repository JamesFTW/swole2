import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ProfileScreen, ProfileScreenRoute } from './ProfileScreen'
import {
  WeekAtGlanceStack,
  WeekAtGlanceStackRoute,
} from '../../features/user/profile/weekatglance/WeekAtGlanceStack'

import {
  ProfileSettingsStack,
  ProfileSettingsStackRoute,
} from './profilesettingsscreen'

const Stack = createNativeStackNavigator()
export const ProfileScreenStackRoute = 'ProfileScreenStackRoute'

export function ProfileScreenStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ProfileScreenRoute} component={ProfileScreen} />
      <Stack.Screen
        name={WeekAtGlanceStackRoute}
        component={WeekAtGlanceStack}
      />
      <Stack.Screen
        name={ProfileSettingsStackRoute}
        component={ProfileSettingsStack}
      />
    </Stack.Navigator>
  )
}

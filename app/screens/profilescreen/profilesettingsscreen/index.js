import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  ProfileSettingsScreen,
  ProfileSettingsScreenRoute,
} from './ProfileSettingsScreen'

import {
  ProfilePhotoManager,
  profileManageDrawerConfig,
  ProfilePhotoManagerRoute,
} from '../../../features'

const Stack = createNativeStackNavigator()
export const ProfileSettingsStackRoute = 'ProfileSettingsStackRoute'

export function ProfileSettingsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ProfileSettingsScreenRoute}
        component={ProfileSettingsScreen}
      />
      <Stack.Screen
        name={ProfilePhotoManagerRoute}
        component={ProfilePhotoManager}
        options={profileManageDrawerConfig}
      />
    </Stack.Navigator>
  )
}

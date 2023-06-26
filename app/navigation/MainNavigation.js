import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { WorkoutScreen, WorkoutScreenRoute } from '../screens/workoutscreen/WorkoutScreen'
import { ProfileScreenStackRoute, ProfileScreenStack } from '../screens/profilescreen'
import { NavLocationScreenRoute, NavLocationScreen } from '../screens/navlocationscreen/NavLocationScreen'
import { CalendarScreenRoute, CalendarScreen } from '../screens/calendarscreen/CalendarScreen'
import { NavButtons } from './navbar/NavButtons'

export const MainNavigationRoute = 'MainNavigationRoute'

const Tab = createBottomTabNavigator()

export function MainNavigation() {
  return (
    <Tab.Navigator tabBar={(props) => <NavButtons {...props}/>}  
      screenOptions={{
        headerShown: false, 
        showLabel: false
        }}>
      <Tab.Screen name={NavLocationScreenRoute} component={NavLocationScreen} />
      <Tab.Screen name={CalendarScreenRoute} component={CalendarScreen} />
      <Tab.Screen name={WorkoutScreenRoute} component={WorkoutScreen} />
      <Tab.Screen name={ProfileScreenStackRoute} component={ProfileScreenStack} />
    </Tab.Navigator>
  )
}

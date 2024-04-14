import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { WorkoutScreenStack, WorkoutScreenStackRoute } from '../screens/workoutscreen/'
import { ProfileScreenStackRoute, ProfileScreenStack } from '../screens/profilescreen'
import { NavLocationScreenRoute, NavLocationScreen } from '../screens/navlocationscreen/NavLocationScreen'
import { CalendarScreenRoute, CalendarScreen } from '../screens/calendarscreen/CalendarScreen'
import { NavBar } from './navbar/NavBar'

export const MainNavigationRoute = 'MainNavigationRoute'

const Tab = createBottomTabNavigator()

export function MainNavigation() {
  return (
    <Tab.Navigator tabBar={(props) => <NavBar {...props}/>}  
      screenOptions={{
        headerShown: false, 
        showLabel: false
        }}>
      <Tab.Screen name={NavLocationScreenRoute}  component={NavLocationScreen} />
      <Tab.Screen name={CalendarScreenRoute}     component={CalendarScreen} />
      <Tab.Screen name={WorkoutScreenStackRoute} component={WorkoutScreenStack} />
      <Tab.Screen name={ProfileScreenStackRoute} component={ProfileScreenStack} />
    </Tab.Navigator>
  )
}

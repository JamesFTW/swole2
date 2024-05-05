import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SplashScreen, SplashScreenRoute } from './splashscreen/SplashScreen'
import { SignUpScreen, SignUpScreenRoute } from './signupscreen/SignUpScreen'
import { UserDetailsScreen, UserDetailsScreenRoute } from './userdetailsscreen/UserDetailsScreen'
import { SignInScreen, SignInScreenRoute } from './signinscreen/SignInScreen'

const Stack = createNativeStackNavigator()

//very basic router set up

export function OnBoardingStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SplashScreenRoute} component={SplashScreen} />
      <Stack.Screen name={SignUpScreenRoute} component={SignUpScreen} />
      <Stack.Screen name={UserDetailsScreenRoute} component={UserDetailsScreen} />
      <Stack.Screen name={SignInScreenRoute} component={SignInScreen} />
    </Stack.Navigator>
  )
}

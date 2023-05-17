/**
 * Storybook is commented out because it doesn't render full screen views
 */

// export { default } from '../storybook';

/**
 *  - screens
 *  -- workoutscreen
 *  ---- exercise
 * ----- etc.
 */

/**
 * file orignally had this
 */

import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {SplashScreen} from './screens/onboarding/splashscreen/SplashScreen'
import { SignUpScreen } from './screens/onboarding/signupscreen/SignUpScreen'

const Stack = createNativeStackNavigator()

//very basic router set up

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
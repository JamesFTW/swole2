/**
 * Storybook is commented out because it doesn't render full screen views
 */

// export { default } from '../storybook';

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { OnBoardingStack } from './screens/onboarding'

const Stack = createNativeStackNavigator()

//very basic router set up

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Onboarding"
          component={OnBoardingStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
/**
 * Storybook is commented out because it doesn't render full screen views
 */

// export { default } from '../storybook';

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import {
  MainNavigation,
  MainNavigationRoute,
} from './navigation/MainNavigation'
import { OnBoardingStack } from './screens/onboarding'

const Stack = createNativeStackNavigator()
const queryClient = new QueryClient()

//very basic router set up

function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen
              name="Onboarding"
              component={OnBoardingStack}
            /> */}
          <Stack.Screen name={MainNavigationRoute} component={MainNavigation} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  )
}

export default App

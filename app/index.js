/**
 * Storybook is commented out because it doesn't render full screen views
 */

// export { default } from '../storybook';

import * as React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import {
  MainNavigation,
  MainNavigationRoute,
} from './navigation/MainNavigation'
import { OnBoardingStack } from './screens/onboarding'

const Stack = createNativeStackNavigator()
const queryClient = new QueryClient()

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F2F2F2',
  },
}

//very basic router set up

function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator
          screenOptions={{ headerShown: false, orientation: 'portrait_up' }}>
          {/* <Stack.Screen
              name="Onboarding"
              component={OnBoardingStack}
            /> */}
          <Stack.Screen component={MainNavigation} name={MainNavigationRoute} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  )
}

export default App

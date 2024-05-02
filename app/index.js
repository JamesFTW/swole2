/**
 * Storybook is commented out because it doesn't render full screen views
 */

// export { default } from '../storybook';

import React, { useContext } from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProfileProvider, AuthProvider, AuthContext } from '@providers'

import {
  MainNavigation,
  MainNavigationRoute,
} from './navigation/MainNavigation'
import { OnBoardingStack } from './screens/onboarding'
import { SplashScreen } from './screens/splashscreen/SplashScreen'

const Stack = createNativeStackNavigator()
const queryClient = new QueryClient()

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F6F7FA',
  },
}

function App() {
  const { isLoggedIn, isLoading } = useContext(AuthContext)

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={navTheme}>
        <ProfileProvider>
          <Stack.Navigator
            screenOptions={{ headerShown: false, orientation: 'portrait_up' }}>
            {isLoading ? (
              <Stack.Screen name="SplashScreen" component={SplashScreen} />
            ) : isLoggedIn ? (
              <Stack.Screen
                name={MainNavigationRoute}
                component={MainNavigation}
                options={{ animation: 'fade' }}
              />
            ) : (
              <Stack.Screen
                name="Onboarding"
                options={{ animation: 'fade' }}
                component={OnBoardingStack}
              />
            )}
          </Stack.Navigator>
        </ProfileProvider>
      </NavigationContainer>
    </QueryClientProvider>
  )
}

const WrappedApp = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}

export default WrappedApp

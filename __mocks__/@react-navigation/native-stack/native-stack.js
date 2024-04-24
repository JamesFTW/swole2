import React from 'react'
import { View, Text } from 'react-native'

// Mock the Navigator and Screen components
const MockedNavigator = ({ children }) => <View>{children}</View>
const MockedScreen = ({ children, route }) => (
  <View>
    <Text>{route.name}</Text>
    {children}
  </View>
)

// Provide your mock implementation of createNativeStackNavigator
export function createNativeStackNavigator() {
  return {
    Navigator: MockedNavigator,
    Screen: MockedScreen,
    Route: MockedRoute,
  }
}

export default { createNativeStackNavigator }

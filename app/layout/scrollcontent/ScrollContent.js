import * as React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'

export function ScrollContent({ 
  children,
  useSafeArea,
  style,
  horizontal,
  showsHorizontalScrollIndicator,
  showsVerticalScrollIndicator
}) {
  if (useSafeArea) {
    return (
      <SafeAreaView>
        <ScrollView 
          showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
          showsVerticalScrollIndicator={showsVerticalScrollIndicator}
          horizontal={horizontal} 
          style={style}
        >
          { children }
        </ScrollView>
      </SafeAreaView>
    )
  }

  return (
    <ScrollView
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      horizontal={horizontal} 
      style={style}
    >
      { children }
    </ScrollView>
  )
}

export default ScrollContent
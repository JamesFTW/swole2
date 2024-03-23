import * as React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'

export function ScrollContent({ 
  children,
  useSafeArea,
  style,
  horizontal,
  showsHorizontalScrollIndicator,
  showsVerticalScrollIndicator,
  onScroll,
  scrollEventThrottle
}) {
  if (useSafeArea) {
    return (
      <SafeAreaView>
        <ScrollView 
          showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
          showsVerticalScrollIndicator={showsVerticalScrollIndicator}
          onScroll={onScroll}
          horizontal={horizontal} 
          style={style}
          scrollEventThrottle={scrollEventThrottle}
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
      onScroll={onScroll}
      scrollEventThrottle={scrollEventThrottle}
    >
      { children }
    </ScrollView>
  )
}

export default ScrollContent
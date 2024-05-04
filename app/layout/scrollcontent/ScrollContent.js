import * as React from 'react'
import { SafeAreaView, ScrollView, RefreshControl } from 'react-native'

export function ScrollContent({
  children,
  useSafeArea,
  style,
  horizontal,
  showsHorizontalScrollIndicator,
  showsVerticalScrollIndicator,
  onScroll,
  scrollEventThrottle,
  refreshingFunc = async () => {},
}) {
  const [refreshing, setRefreshing] = React.useState(false)

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true)
    try {
      await refreshingFunc()
      setRefreshing(false)
    } catch (error) {
      console.error('Error refreshing data:', error)
      setRefreshing(false)
    }
  }, [refreshingFunc])

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
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {children}
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
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {children}
    </ScrollView>
  )
}

export default ScrollContent

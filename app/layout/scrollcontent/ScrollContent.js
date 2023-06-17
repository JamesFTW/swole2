import * as React from 'react'
import styles from './ScrollContent.styles'
import { SafeAreaView, ScrollView } from 'react-native'

export function ScrollContent({ 
  children,
  useSafeArea,
  style
}) {
  if (useSafeArea) {
    return (
      <SafeAreaView>
        <ScrollView style={styles.scroll_container}>
          { children }
        </ScrollView>
      </SafeAreaView>
    )
  }

  return (
    <ScrollView style={style}>
      { children }
    </ScrollView>
  )
}

export default ScrollContent
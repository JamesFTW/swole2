import * as React from 'react'
import styles from './ScrollContent.styles'
import { SafeAreaView, ScrollView } from 'react-native'

export function ScrollContent({ children }) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scroll_container}>
        { children }
      </ScrollView>
    </SafeAreaView>
  )
}

export default ScrollContent
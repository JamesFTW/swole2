import * as React from 'react'
import styles from './ScrollContent.styles'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

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
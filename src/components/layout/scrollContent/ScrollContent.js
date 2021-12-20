import * as React from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import styles from './ScrollContent.styles'

function ScrollContent({ children }) {
  return (
    <SafeAreaView style={styles.backGround}>
      <ScrollView style={styles.container}>
        { children }
      </ScrollView>
    </SafeAreaView>
  )
}

export default ScrollContent
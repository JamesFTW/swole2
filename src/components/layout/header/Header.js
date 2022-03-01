import * as React from 'react'
import { View, Text } from 'react-native'
import styles from './Header.styles'

function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.flexContent}>
          <Text style={styles.workoutTitle}>Push Upper Body</Text>
          <Text style={styles.workoutDate}>Wednesday - 11/23/2011</Text>
        </View>
      </View>
    </View>
  )
}

export default Header
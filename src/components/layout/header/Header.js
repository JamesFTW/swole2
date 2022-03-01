import * as React from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import styles from './Header.styles'

function Header({ children }) {
  return (
    <SafeAreaView>
      <ScrollView>
        { children }
      </ScrollView>
    </SafeAreaView>
  )
}

export default Header
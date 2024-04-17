import * as React from 'react'
import styles from './Header.styles'
import { View, Text } from 'react-native'
import { BackButton } from '../../assets/icons'

export function Header({ title, onPress }) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <BackButton onPress={onPress} style={styles.backButton} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  )
}

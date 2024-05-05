import * as React from 'react'
import styles from './Header.styles'
import { View, Text } from 'react-native'
import { BackButton } from '../../assets/icons'
import { TextButton } from '../textbutton/TextButton'

export function Header({ title, onPress, secondaryAction, secondaryActionText }) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <BackButton onPress={onPress} style={styles.backButton} />
        <Text style={styles.headerText}>{title}</Text>
        {secondaryAction && (
          <TextButton textStyle={styles.secondaryActionText} style={styles.secondaryAction} onPress={secondaryAction}>
            {secondaryActionText}
          </TextButton>
        )}
      </View>
    </View>
  )
}

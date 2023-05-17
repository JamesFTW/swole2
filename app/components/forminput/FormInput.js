import * as React from 'react'
import styles from './FormInput.styles'
import { View, Text, TextInput } from 'react-native'

export function FormInput({
  title,
  placeholder
}) {
  
  return (
    <View style={styles.container}>
      <View style={styles.formInput}>
        <Text style={styles.title}>{ title }</Text>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
        />
      </View>
    </View>
  )
}
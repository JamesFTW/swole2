import React from 'react'
import styles from './FormInput.styles'
import { View, Text, TextInput } from 'react-native'

export function FormInput({
  title,
  placeholder,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  secureTextEntry,
  textContentType,
  onChangeText
}) {
  
  return (
    <View style={[styles.container, {
      marginTop,
      marginBottom,
      marginRight,
      marginLeft,
      textContentType
    }]}>
      <View style={styles.formInput}>
        <Text style={styles.title}>{ title }</Text>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry ? true : false}
          textContentType={textContentType}
          keyboardType="email-address"
          onChangeText={onChangeText}
        />
      </View>
    </View>
  )
}
import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, SafeAreaView } from 'react-native'
import { ScrollContent } from '@layout'
import { Header } from '@components'

import styles from './ProfileSettingsFieldInput.style'

export const ProfileSettingsFieldInputRoute = 'ProfileSettingsFieldInputRoute'

export const ProfileSettingsFieldInput = ({ route, navigation }) => {
  const [name, setName] = useState('')

  const { title, value } = route.params

  useEffect(() => {
    setName(value)
  }, [])

  return (
    <SafeAreaView>
      <Header title={title} onPress={() => navigation.goBack()} />
      <ScrollContent style={styles.scrollContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.profileSettingsFormField}>
            <Text style={styles.profileSettingsText}>{title}</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder={title}
              style={styles.profileSettingsInputText}
            />
            <View style={styles.profileSettingsLineSeparator} />
          </View>
        </View>
      </ScrollContent>
    </SafeAreaView>
  )
}

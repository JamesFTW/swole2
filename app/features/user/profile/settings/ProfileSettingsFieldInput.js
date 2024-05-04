import React, { useState, useEffect, useContext } from 'react'
import { View, Text, TextInput, SafeAreaView } from 'react-native'
import { ScrollContent } from '@layout'
import { Header } from '@components'
import { ProfileContext } from '@providers'
import { useUpdateProfile } from '@lib/users/profile/hooks'

import styles from './ProfileSettingsFieldInput.style'

export const ProfileSettingsFieldInputRoute = 'ProfileSettingsFieldInputRoute'

export function ProfileSettingsFieldInput({ route, navigation }) {
  const [name, setName] = useState('')

  const { title, value, dataBaseField } = route.params
  const { mutate } = useUpdateProfile()
  const { profileData, updateProfileData } = useContext(ProfileContext)

  const userData = profileData

  useEffect(() => {
    setName(value)
  }, [])

  const handleSave = async () => {
    const requestJSON = {
      ...userData,
      [dataBaseField]: name,
    }
    mutate({ ...requestJSON })
    updateProfileData({ ...requestJSON })
    navigation.goBack()
  }

  const handleNavigateBack = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView>
      <Header
        title={title}
        onPress={handleNavigateBack}
        secondaryAction={handleSave}
        secondaryActionText="Save"
      />
      <ScrollContent style={styles.scrollContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.profileSettingsFormField}>
            <Text style={styles.profileSettingsText}>{title}</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder={title}
              style={styles.profileSettingsInputText}
              multiline={true}
            />
            <View style={styles.profileSettingsLineSeparator} />
          </View>
        </View>
      </ScrollContent>
    </SafeAreaView>
  )
}

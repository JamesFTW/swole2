import React, { useContext } from 'react'
import { View, Text, Pressable } from 'react-native'
import { ProfileSettingsFieldInputRoute } from './ProfileSettingsFieldInput'
import { ProfileContext } from '@providers'
import styles from './ProfileSettingsForm.style'

export const ProfileSettingsFormRoute = 'ProfileSettingsFormRoute'

export function ProfileSettingsForm({ navigation }) {
  const { profileData } = useContext(ProfileContext)

  const { userName, bio, email, location, units } = profileData?.userInfo

  const Form = () => {
    const formTitles = [
      { title: 'Username', value: userName },
      { title: 'Bio', value: bio },
      { title: 'Email', value: email },
      { title: 'Location', value: location },
      { title: 'Units', value: units },
    ]
    return formTitles.map((title, index) => {
      return (
        <View style={styles.profileSettingsFormField} key={index}>
          <Text style={styles.profileSettingsText}>{title.title}</Text>
          <Pressable
            onPress={() =>
              navigation.navigate(ProfileSettingsFieldInputRoute, {
                title: title.title,
                value: title.value,
              })
            }
            style={styles.profileSettingsFormFieldInput}>
            <Text
              style={
                title.value
                  ? styles.profileSettingsText
                  : styles.profileSettingsPlaceholder
              }>
              {title.value ? title.value : title.title}
            </Text>
            <View style={styles.profileSettingsLineSeparator} />
          </Pressable>
        </View>
      )
    })
  }

  return (
    <View style={styles.profileSettingsFormContainer}>
      <View style={styles.profileSettingsFormContent}>
        <Form />
      </View>
    </View>
  )
}

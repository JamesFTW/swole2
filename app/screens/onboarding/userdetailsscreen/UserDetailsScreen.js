import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { LAYOUT } from '../../../constants'
import { Button, FormInput } from '../../../components'
import styles from './UserDetailsScreen.styles'

export const UserDetailsScreenRoute = 'UserDetailsScreenRoute'

const CONSTANTS = {
  EMAIL_PLACEHOLDER: 'swolegod',
  Full_NAME_PLACEHOLDER: 'Bob Swole',
  SIGN_UP_WITH_EMAIL: 'Create your profile',
  BIRTHDATE_PLACEHOLDER: 'MM/DD/YYYY',
  SUB_TITLE_TEXT:
    'This will give you a place to store workouts and help your friends find you.',
}

export function UserDetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userDetailsContent}>
        <Text style={styles.title}>{CONSTANTS.SIGN_UP_WITH_EMAIL}</Text>
        <Text style={styles.subTitle}>{CONSTANTS.SUB_TITLE_TEXT}</Text>
        <View style={styles.content}>
          <FormInput
            textContentType={'username'}
            placeholder={CONSTANTS.EMAIL_PLACEHOLDER}
            title="Username"
          />
          <FormInput
            textContentType={'name'}
            placeholder={CONSTANTS.Full_NAME_PLACEHOLDER}
            marginTop={LAYOUT.SPACING_S_20}
            title="Full name"
          />
          <FormInput
            textContentType={'none'}
            placeholder={CONSTANTS.BIRTHDATE_PLACEHOLDER}
            marginTop={LAYOUT.SPACING_S_20}
            title="Birthdate"
            marginBottom={191}
          />
          <Button title="Get Swole!" />
        </View>
      </View>
    </SafeAreaView>
  )
}

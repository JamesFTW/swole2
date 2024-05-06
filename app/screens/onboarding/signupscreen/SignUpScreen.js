import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { LAYOUT } from '@constants'
import { Button, FormInput, TextButton } from '@components'
import { UserDetailsScreenRoute } from '../userdetailsscreen/UserDetailsScreen'
import styles from './SignUpScreen.styles'

export const SignUpScreenRoute = 'SignUpScreen'

const CONSTANTS = {
  EMAIL_PLACEHOLDER: 'iamveryswole@swole.com',
  PASSWORD_REQUIREMENT_TEXT: 'Password must contain at least 8 characters',
  PASSWORD_PLACEHOLDER: '*******',
  SIGN_UP_WITH_EMAIL: 'Sign up with email',
}

export function SignUpScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.signUpScreenContent}>
        <TextButton onPress={() => navigation.goBack()} marginTop={LAYOUT.SPACING_S_28} style={styles.backButton}>
          Back
        </TextButton>
        <Text style={styles.title}>{CONSTANTS.SIGN_UP_WITH_EMAIL}</Text>
        <View style={styles.content}>
          <FormInput textContentType={'emailAddress'} placeholder={CONSTANTS.EMAIL_PLACEHOLDER} title="Email" />
          <FormInput
            secureTextEntry
            textContentType={'newPassword'}
            placeholder={CONSTANTS.PASSWORD_PLACEHOLDER}
            marginTop={LAYOUT.SPACING_S_20}
            title="Password"
          />
          <Text style={styles.passwordRequirementText}>{CONSTANTS.PASSWORD_REQUIREMENT_TEXT}</Text>
          <Button onPress={() => navigation.navigate(UserDetailsScreenRoute)} title="Submit" />
        </View>
      </View>
    </SafeAreaView>
  )
}

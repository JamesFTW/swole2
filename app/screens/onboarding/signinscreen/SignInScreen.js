import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { LAYOUT } from '../../../constants'
import { Button, FormInput, TextButton } from '../../../components'
import { UserDetailsScreenRoute } from '../userdetailsscreen/UserDetailsScreen'
import styles from './SigninScreen.styles'

export const SignInScreenRoute = 'SignInScreen'

const CONSTANTS = {
  EMAIL_PLACEHOLDER: 'iamswole',
  PASSWORD_REQUIREMENT_TEXT: 'Password must contain at least 8 characters',
  PASSWORD_PLACEHOLDER: '*******',
  SIGN_UP_WITH_EMAIL: 'Log in'
}

export function SignInScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.signUpScreenContent}>
        <TextButton 
          onPress={() => navigation.goBack()} 
          marginTop={LAYOUT.SPACING_S_28} 
          style={styles.backButton}>
            Back
        </TextButton>
        <Text style={styles.title}>{CONSTANTS.SIGN_UP_WITH_EMAIL}</Text>
        <View style={styles.content}>
          <FormInput 
            textContentType={'emailAddress'} 
            placeholder={CONSTANTS.EMAIL_PLACEHOLDER}
            title="Username"
          />
          <FormInput 
            secureTextEntry 
            textContentType={'password'}
            placeholder={CONSTANTS.PASSWORD_PLACEHOLDER}
            marginTop={LAYOUT.SPACING_S_20} 
            title="Password"
            marginBottom={119}
          />
          {/** Verify then login to profile */}
          <Button onPress={() =>{}} title="Submit"/>
        </View>
      </View>
    </SafeAreaView>
  )
}
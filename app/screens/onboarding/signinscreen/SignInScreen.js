import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { LAYOUT } from '../../../constants'
import { Button, FormInput, TextButton } from '../../../components'
import { useUserSignin } from '../../../lib/users/hooks/'
import { MainNavigationRoute } from '../../../navigation/MainNavigation'
import styles from './SigninScreen.styles'

export const SignInScreenRoute = 'SignInScreen'

const CONSTANTS = {
  EMAIL_PLACEHOLDER: 'iamswole',
  PASSWORD_REQUIREMENT_TEXT: 'Password must contain at least 8 characters',
  PASSWORD_PLACEHOLDER: '*******',
  SIGN_UP_WITH_EMAIL: 'Log in'
}

export function SignInScreen({navigation}) {
  const [username, setUsernameText] = useState('')
  const [password, setPasswordText] = useState('')

  const { mutate: Signin, isSuccess, isLoading } = useUserSignin()

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate(MainNavigationRoute)
    }
  }, [isSuccess, navigation])

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
            onChangeText={(text) => setUsernameText(text)}
          />
          <FormInput 
            secureTextEntry 
            textContentType={'password'}
            placeholder={CONSTANTS.PASSWORD_PLACEHOLDER}
            marginTop={LAYOUT.SPACING_S_20} 
            title="Password"
            marginBottom={119}
            onChangeText={(text) => setPasswordText(text)}
          />
          <Button onPress={() => {
            Signin({
              username,
              password,
            })
          }} title="Submit"/>

          {/** navigate to profile page if true, throw error screen if not */}
        </View>
      </View>
    </SafeAreaView>
  )
}
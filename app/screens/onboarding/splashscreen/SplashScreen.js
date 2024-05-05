import React from 'react'
import { ImageBackground, View, Text, StatusBar } from 'react-native'
import { LAYOUT } from '../../../constants'
import { Button } from '../../../components'
import { EmailIcon } from '../../../assets/icons'
import { SignUpScreenRoute } from '../signupscreen/SignUpScreen'
import { SignInScreenRoute } from '../signinscreen/SignInScreen'
import SplashScreenBackground from '../../../assets/imgs/splash_screen.png'
import styles from './SplashScreen.styles'

export const SplashScreenRoute = 'SplashScreenRoute'

const CONSTANTS = {
  SWOLE: 'SWOLE',
  WELCOME_MESSAGE: 'Welcome',
  WELCOME_MESSAGE_SUB_TEXT: 'You’re only a few steps away from getting Swole.',
  SIGN_UP_WITH_EMAIL: 'Sign Up with Email',
  ALREADY_A_MEMBER: 'Already a member?',
  LOG_IN: 'Log in',
  SignUpScreen: 'SignUpScreen',
}

export function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground source={SplashScreenBackground} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>{CONSTANTS.SWOLE}</Text>
        <View style={styles.welcomeMessageContainer}>
          <Text style={styles.welcomeMessage}>{CONSTANTS.WELCOME_MESSAGE}</Text>
          <Text style={styles.welcomeMessageSubText}>{CONSTANTS.WELCOME_MESSAGE_SUB_TEXT}</Text>
        </View>
      </ImageBackground>
      <Button
        outline
        title={CONSTANTS.SIGN_UP_WITH_EMAIL}
        icon={<EmailIcon />}
        marginTop={LAYOUT.SPACING_MD_36}
        marginLeft={LAYOUT.SPACING_S_20}
        marginRight={LAYOUT.SPACING_S_20}
        style={{ height: 48, borderRadius: 10 }}
        textStyle={{ marginLeft: 64 }}
        onPress={() => navigation.navigate(SignUpScreenRoute)}
      />
      <Text style={styles.text}>
        {CONSTANTS.ALREADY_A_MEMBER}
        <Text onPress={() => navigation.navigate(SignInScreenRoute)} style={styles.loginText}>
          {' '}
          {CONSTANTS.LOG_IN}
        </Text>
      </Text>
    </View>
  )
}

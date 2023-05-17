import React from 'react'
import { ImageBackground, View, Text, StatusBar } from 'react-native'
import { LAYOUT } from '../../../constants'
import { Button } from '../../../components'
import { EmailIcon } from '../../../assets/icons'
import SplashScreenBackground from '../../../assets/imgs/splash_screen.png'

import styles from './SplashScreen.styles'

export function SplashScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent 
        backgroundColor='transparent'
    />
    <ImageBackground 
      source={SplashScreenBackground}
      resizeMode='cover'
      style={styles.image}
    >
    <Text style={styles.title}>SWOLE</Text>
    </ImageBackground>
      <Button 
        outline 
        title="Sign Up with Email" 
        icon={<EmailIcon/>}
        marginTop={LAYOUT.SPACING_MD_36}
        marginLeft={LAYOUT.SPACING_S_20}
        marginRight={LAYOUT.SPACING_S_20}
        onPress={() => navigation.navigate('SignUpScreen')}
      />
        <Text style={styles.text}>Already a member? 
            <Text onPress={() => {
            }} style={styles.loginText}> Log in</Text>
        </Text>
    </View>
  )
}


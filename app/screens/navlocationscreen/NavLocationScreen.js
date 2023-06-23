import * as React from 'react'
import { View, Text } from 'react-native'
import styles from './NavLocationScreen.styles'
import { TextButton } from '../../components'

export const NavLocationScreenRoute = "NavLocationScreenRoute"


export function NavLocationScreen({workoutId, route, navigation}) {  
  //check if id is cached in async storage.  if not fetch then store
  return (
    <View style={{marginTop: 100}}>
      <TextButton 
          onPress={() => navigation.goBack()} 
          // marginTop={LAYOUT.SPACING_S_28} 
          style={styles.backButton}>
            Back
        </TextButton>
      <Text>This is a workout for nav location screen</Text>
    </View>
  )
}

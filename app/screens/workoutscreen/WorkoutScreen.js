import * as React from 'react'
import { View, Text } from 'react-native'
import styles from './WorkoutScreen.styles'
import { TextButton } from '../../components'

export const WorkoutScreenRoute = "WorkoutScreenRoute"

/**
 * 
 *Need to rename/move this to the profile page.  This is profile specific workouts
 */


export function WorkoutScreen({navigation}) {  
  //check if id is cached in async storage.  if not fetch then store
  return (
    <View style={{marginTop: 100}}>
      <TextButton 
          onPress={() => navigation.goBack()} 
          // marginTop={LAYOUT.SPACING_S_28} 
          style={styles.backButton}>
            Back
        </TextButton>
      <Text>This is workout screen placholder</Text>
    </View>
  )
}

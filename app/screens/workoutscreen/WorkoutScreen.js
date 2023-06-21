import * as React from 'react'
import { View, Text } from 'react-native'
import styles from './WorkoutScreen.styles'
import { TextButton } from '../../components'

export const WorkoutScreenRoute = "WorkoutScreenRoute"


export function WorkoutScreen({workoutId, route, navigation}) {  
  //check if id is cached in async storage.  if not fetch then store
  const { workoutInfo } = route.params
  console.log(workoutInfo)
  return (
    <View style={{marginTop: 100}}>
      <TextButton 
          onPress={() => navigation.goBack()} 
          // marginTop={LAYOUT.SPACING_S_28} 
          style={styles.backButton}>
            Back
        </TextButton>
      <Text>This is a workout for {workoutInfo.day}</Text>
    </View>
  )
}

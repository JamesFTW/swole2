import * as React from 'react'
import { View, Text } from 'react-native'
import { TextButton } from '../../../components'

export const UserSettingsScreenRoute = "UserSettingsScreenRoute"


export function UserSettingsScreen({workoutId, route, navigation}) {  
  //check if id is cached in async storage.  if not fetch then store
  return (
    <View style={{marginTop: 100}}>
      <TextButton 
          onPress={() => navigation.goBack()} 
          // marginTop={LAYOUT.SPACING_S_28} 
          >
            Back
        </TextButton>
      <Text>This is the users settings screen</Text>
    </View>
  )
}

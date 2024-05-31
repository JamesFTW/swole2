import styles from './SelectWorkout.styles'
import * as React from 'react'
import { Text, Pressable } from 'react-native'
import { FlexContainer } from '@layout'
import { StartNewWorkout } from '@assets/icons'
import { StartNewWorkoutScreenRoute } from '@screens/workoutscreen/startnewworkoutscreen/StartNewWorkoutScreen'
import { StartNewWorkoutStackRoute } from '@screens/workoutscreen/startnewworkoutscreen'

export const SelectWorkout = ({ navigation }) => (
  <Pressable
    style={styles.buttonStyle}
    onPress={() =>
      navigation.navigate(StartNewWorkoutStackRoute, {
        screen: StartNewWorkoutScreenRoute,
      })
    }>
    <FlexContainer style={styles.flexContainer} direction="row">
      <StartNewWorkout />
      <Text style={styles.startNewWorkoutText}>Start New Workout</Text>
    </FlexContainer>
  </Pressable>
)

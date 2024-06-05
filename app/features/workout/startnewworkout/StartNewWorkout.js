import styles from './StartNewWorkout.styles'
import * as React from 'react'
import { Text, Pressable } from 'react-native'
import { FlexContainer } from '@layout'
import { StartNewWorkout as StartNewWorkoutIcon } from '@assets/icons'
import { StartNewWorkoutScreenRoute } from '@screens/workoutscreen/startnewworkoutscreen/StartNewWorkoutScreen'
import { StartNewWorkoutStackRoute } from '@screens/workoutscreen/startnewworkoutscreen'

export const StartNewWorkout = ({ navigation }) => (
  <Pressable
    style={styles.buttonStyle}
    onPress={() =>
      navigation.navigate(StartNewWorkoutStackRoute, {
        screen: StartNewWorkoutScreenRoute,
      })
    }>
    <FlexContainer style={styles.flexContainer} direction="row">
      <StartNewWorkoutIcon />
      <Text style={styles.startNewWorkoutText}>Start New Workout</Text>
    </FlexContainer>
  </Pressable>
)

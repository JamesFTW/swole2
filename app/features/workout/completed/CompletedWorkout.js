import styles from './CompletedWorkout.styles'
import React from 'react'
import { View, Text } from 'react-native'
import { FlexContainer } from '@layout'
import { ProfilePhoto } from '@features'
import { LAYOUT } from '@constants'

const WorkoutData = ({ title, data }) => {
  return (
    <FlexContainer style={styles.workoutDataContainer} direction="column">
      <Text style={styles.workoutDataTitle}>{title}</Text>
      <Text style={styles.workoutDataInfo}>{data}</Text>
    </FlexContainer>
  )
}

export const CompletedWorkout = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlexContainer direction="column">
        <FlexContainer style={styles.userHeaderContainer} direction="row">
          <ProfilePhoto borderRadius={LAYOUT.SPACING_XS_16 + LAYOUT.SPACING_NUDGE_S} style={styles.profilePhoto} />
          <FlexContainer direction="column">
            <Text style={styles.userName}>{data.userName}</Text>
            <Text style={styles.workoutDataLocation}>
              {data.workoutTime} {data.location}
            </Text>
          </FlexContainer>
        </FlexContainer>
        <Text style={styles.workoutTitle}>{data.workoutTitle}</Text>
        <FlexContainer style={styles.workoutDataRow} direction="row">
          <WorkoutData title="Total Volume" data={data.totalVolume} />
          <View style={styles.verticalDivider} />
          <WorkoutData title="Workout Time" data={data.time} />
        </FlexContainer>
        <View style={styles.divider}></View>
        <FlexContainer style={styles.workoutDataRow} direction="row">
          <WorkoutData title="Calories" data={data.calsBurned} />
          <View style={styles.verticalDivider} />
          <WorkoutData title="Primary Muscle" data={data.primaryMusleGroup} />
        </FlexContainer>
      </FlexContainer>
    </View>
  )
}

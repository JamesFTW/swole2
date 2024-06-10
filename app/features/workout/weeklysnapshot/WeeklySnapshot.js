import styles from './WeeklySnapshot.styles'
import React from 'react'
import { View } from 'react-native'
import { SnapshotHeader, SnapshotData } from './components'
import { FlexContainer } from '@layout'
import { useGetWeeklySnapshot } from '@lib/workouts/hooks'
import { formatTimeForWeeklySnapshot } from '@app/utils/dateTimeUtil'

export const WeeklySnapshot = () => {
  const { data, isLoading } = useGetWeeklySnapshot()

  const { totalWorkoutTime, numberOfSets, totalVolume } = data.weeklySnapshotData

  const time = formatTimeForWeeklySnapshot(totalWorkoutTime)

  return (
    <View style={styles.container}>
      <SnapshotHeader />
      <FlexContainer direction="row" style={styles.flexContainer}>
        <SnapshotData data={{ info: isLoading ? '0' : numberOfSets, title: 'Sets' }} />
        <SnapshotData data={{ info: isLoading ? 'Oh' : time, title: 'Time' }} />
        <SnapshotData data={{ info: isLoading ? '0m' : `${totalVolume} lbs`, title: 'Weight' }} />
      </FlexContainer>
    </View>
  )
}

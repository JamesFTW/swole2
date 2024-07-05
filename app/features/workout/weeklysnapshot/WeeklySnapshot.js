import styles from './WeeklySnapshot.styles'
import React, { useCallback } from 'react'
import { View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { SnapshotHeader, SnapshotData } from './components'
import { FlexContainer } from '@layout'
import { useGetWeeklySnapshot } from '@lib/workouts/hooks'
import { formatTimeForWeeklySnapshot } from '@app/utils/dateTimeUtil'

export const WeeklySnapshot = () => {
  const { data, isLoading, error, refetch } = useGetWeeklySnapshot()

  useFocusEffect(
    useCallback(() => {
      refetch()
    }, [refetch]),
  )

  const weeklySnapshotData = data?.weeklySnapshotData || { totalWorkoutTime: 0, numberOfSets: 0, totalVolume: 0 }
  const { totalWorkoutTime, numberOfSets, totalVolume } = weeklySnapshotData

  const time = formatTimeForWeeklySnapshot(totalWorkoutTime)

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error loading data</Text>
      </View>
    )
  }

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

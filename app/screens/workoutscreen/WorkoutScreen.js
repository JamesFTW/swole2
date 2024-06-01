import * as React from 'react'
import { Text } from 'react-native'
import { FlexContainer, ScrollContent } from '@layout'
import { COLORS } from '@constants'
import { SnapshotHeader, SnapshotData, SelectWorkout } from '@features/workout/weeklysnapshot/components'

export const WorkoutScreenRoute = 'WorkoutScreenRoute'

export function WorkoutScreen({ navigation }) {
  return (
    <ScrollContent useSafeArea style={{ height: '100%' }}>
      <SelectWorkout navigation={navigation} />
      <SnapshotHeader />
      <FlexContainer direction="row" style={{ width: '100%', backgroundColor: 'white' }}>
        <SnapshotData data={{ info: 200, title: 'Sets' }} />
        <SnapshotData data={{ info: '3h 40m', title: 'Time' }} />
        <SnapshotData style={{ right: 10 }} data={{ info: '6000 lbs', title: 'Weight' }} />
      </FlexContainer>
      <FlexContainer
        direction="row"
        style={{
          paddingLeft: 20,
          paddingBottom: 14,
          width: '100%',
          backgroundColor: 'white',
          borderBottomColor: COLORS.CARD_BOARDER_COLOR,
          borderBottomWidth: 1,
        }}>
        <Text style={{ marginRight: 28, fontSize: 20 }}>🏆</Text>
        <Text style={{ marginRight: 28, fontSize: 20 }}>⭐</Text>
        <Text style={{ marginRight: 28, fontSize: 20 }}>💪🏽</Text>
      </FlexContainer>
    </ScrollContent>
  )
}

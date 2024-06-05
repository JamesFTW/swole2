import React from 'react'
import { View } from 'react-native'
import { SnapshotHeader, SnapshotData } from './components'
import { COLORS } from '@constants'
import { FlexContainer } from '@layout'

export const WeeklySnapshot = () => {
  return (
    <View style={{ backgroundColor: 'white', borderColor: COLORS.CARD_BOARDER_COLOR, borderWidth: 1 }}>
      <SnapshotHeader />
      <FlexContainer direction="row" style={{ width: '100%', paddingLeft: 12, marginBottom: 20 }}>
        <SnapshotData data={{ info: 200, title: 'Sets' }} />
        <SnapshotData data={{ info: '3h 40m', title: 'Time' }} />
        <SnapshotData style={{ right: 10 }} data={{ info: '200 lbs', title: 'Weight' }} />
      </FlexContainer>
    </View>
  )
}

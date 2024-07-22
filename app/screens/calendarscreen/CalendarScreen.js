import * as React from 'react'
import { SafeAreaView, View } from 'react-native'
import { COLORS } from '@constants'
import { Calendar } from '@features'
import { FlexContainer } from '@layout'
import { StartNewWorkout as StartNewWorkoutIcon } from '@assets/icons'

export const CalendarScreenRoute = 'CalendarScreenRoute'

export function CalendarScreen({ workoutId, route, navigation }) {
  const [selectedDate, setSelectedDate] = React.useState('')

  const onDayPress = day => {
    setSelectedDate(day.dateString)
    console.log(day)
  }

  return (
    <SafeAreaView style={{ width: '100%' }}>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: COLORS.CARD_BOARDER_COLOR,
        }}>
        <Calendar workoutId={workoutId} onDayPress={onDayPress} selectedDate={selectedDate} />
      </View>
    </SafeAreaView>
  )
}

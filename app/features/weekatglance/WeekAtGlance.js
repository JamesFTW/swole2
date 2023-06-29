import * as React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Card } from '../../components'
import { FlexContainer } from '../../layout'
import { Checkmark } from '../../assets/icons'
import { WeekAtGlanceWorkoutRoute } from './weekatglanceworkout/WeekAtGlanceWorkout'
import { WeekAtGlanceStackRoute } from '../weekatglance'
import { useNavigation } from '@react-navigation/native'
import styles from './WeekAtGlance.styles'

export const WeekAtGlanceRoute = 'WeekAtGlanceRoute'

export function WeekAtGlance({weeklyStatus}) {
  const navigation = useNavigation()
  const date = new Date()

  const WEEK_AT_GLANCE_CONSTANTS = {
    'Monday': 'M',
    'Tuesday': 'T',
    'Wednesday': 'W',
    'Thursday': 'TH',
    'Friday': 'F',
    'Saturday': 'S',
    'Sunday': 'S'
  }
  
  const DAYS_OF_THE_WEEK = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  
  const getDaysOfWeekIndicators = () => {
    const map = []
    const dayMargins = {
      Monday: 35,
      Tuesday: 35,
      Wednesday: 40,
      Thursday: 42,
      Friday: 35,
      Saturday: 35,
      Sunday: 0,
    }

    Object.keys(weeklyStatus).map((day) => {
      const isToday = DAYS_OF_THE_WEEK[date.getDay()] === day
      const marginRight = dayMargins[day]
      const workoutInfo = {
        ...weeklyStatus[day],
        day
      }

      map.push(
        <DayofWeekIndicator
          key={workoutInfo.workoutId}
          workoutInfo={workoutInfo} 
          dayOfWeek={WEEK_AT_GLANCE_CONSTANTS[day]} 
          marginRight={marginRight}
          isToday={isToday}
          onPress={() => {
            navigation.navigate(WeekAtGlanceStackRoute, {
              screen: WeekAtGlanceWorkoutRoute,
              params: {
                workoutInfo: workoutInfo
              }
            })
          }}
        />
      )
    })

    return map
  }

  return (
    <Card cardHeight={202}>
      <FlexContainer direction='row'>
        <View style={styles.week_at_glance_subtitle}>
          <Text style={styles.week_subtitle}>This Week</Text>
        </View>
      </FlexContainer>
      <FlexContainer direction='row'>
        {getDaysOfWeekIndicators()}
      </FlexContainer>
      <View style={styles.week_at_glance_underline}/>
      <Text style={styles.show_more_training_subtitle}>See more of your training</Text>
    </Card>
  )
}

export function DayofWeekIndicator({
  dayOfWeek,
  marginRight,
  workoutInfo,
  onPress,
  isToday
}) {
  const { workoutCompleted } = workoutInfo

  return (
    <TouchableOpacity onPress={onPress} style={[styles.day_of_week_container, { marginRight }]}>
      <View style={
        workoutCompleted
          ? styles.day_of_week_indicator_completed 
          : styles.day_of_week_indicator
        }>
        { workoutCompleted ? <Checkmark/> : null }
      </View>
      {isToday
        ? <View style={styles.current_day_text_boarder}>
            <Text style={styles.current_day_text}>{dayOfWeek}</Text>
          </View> 
        : <Text style={styles.day_of_week_text}>{dayOfWeek}</Text>}
    </TouchableOpacity>
  )
}

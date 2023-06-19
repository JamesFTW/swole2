import * as React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Card } from '../../components'
import { FlexContainer } from '../../layout'
import { Checkmark } from '../../assets/icons'
import styles from './WeekAtGlance.styles'

const DAY_OF_WEEK_CONSTANTS = {
  'Monday': 'M',
  'Tuesday': 'T',
  'Wednesday': 'W',
  'Thursday': 'TH',
  'Friday': 'F',
  'Saturday': 'S',
  'Sunday': 'S'
}

export function WeekAtGlance({weeklyStatus}) {  
  
  const getDaysOfWeek = () => {
    const map = []
    const dayMargins = {
      Monday: 35,
      Tuesday: 35,
      Wednesday: 40,
      Thursday: 42,
      Friday: 35,
      Saturday: 35,
      Sunday: 0,
    };

    Object.keys(weeklyStatus).map((day) => {
      const marginRight = dayMargins[day]

      map.push(
        <DayofWeekIndicator 
          workoutCompleted={weeklyStatus[day].workoutCompleted} 
          dayOfWeek={DAY_OF_WEEK_CONSTANTS[day]} 
          marginRight={marginRight}
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
        {getDaysOfWeek()}
      </FlexContainer>
      <View style={styles.week_at_glance_underline}/>
      <Text style={styles.show_more_training_subtitle}>See more of your training</Text>
    </Card>
  )
}

function DayofWeekIndicator({dayOfWeek, marginRight, workoutCompleted, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.day_of_week_container, { marginRight }]}>
      <View style={
        workoutCompleted
          ? styles.day_of_week_indicator_completed 
          : styles.day_of_week_indicator
        }>
        { workoutCompleted ? <Checkmark/> : null }
      </View>
      <Text style={{marginTop: 37}}>{dayOfWeek}</Text>
    </TouchableOpacity>
  )
}

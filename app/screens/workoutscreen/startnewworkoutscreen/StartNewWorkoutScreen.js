import * as React from 'react'
import { View, Text } from 'react-native'

import styles from './StartNewWorkoutScreen.styles'
import { Button } from '../../../components'
import { ScrollContent } from '../../../layout'
import { ExerciseSearchScreenRoute } from '../exercisesearchscreen/ExerciseSearchScreen'
import { WorkoutExercise } from '../../../features'

export const StartNewWorkoutScreenRoute = "StartNewWorkoutScreenRoute"


export function StartNewWorkoutScreen({ navigation, route }) {
  const date = new Date()
  const [exercises, setExercises] = React.useState([])

  React.useEffect(() => {
    if (route.params?.exercises) {
      setExercises(route.params.exercises)
    }
  }, [route.params?.exercises])


  const getDayofWeek = () => {
    const DAYS_OF_THE_WEEK = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]
    return DAYS_OF_THE_WEEK[date.getDay()]
  }

  //need some way to trigger delete if sets array is empty

  const WorkoutExercises = () => {
    if (exercises) {
      return exercises.map((exercise) =>
      (
        <View style={{ marginBottom: 10 }}>
          <WorkoutExercise
            key={exercise.exerciseId}
            exerciseTitle={exercise.exerciseTitle}
            exerciseImage={exercise.video}
          />
        </View>
      )
      )
    }
  }

  const getTimeOfDayString = () => {
    const hour = date.getHours()
    let timeOfDay = ''

    if (hour >= 4 && hour < 12) {
      timeOfDay = 'Morning'
    } else if (hour >= 12 && hour < 18) {
      timeOfDay = 'Afternoon'
    } else if (hour >= 18 && hour < 21) {
      timeOfDay = 'Evening'
    } else {
      timeOfDay = 'Night'
    }

    return timeOfDay
  }

  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).replace(/\//g, '-')

  return (
    <ScrollContent style={styles.scroll_container}>
      <View style={styles.exercise_title_container}>
        <Text style={styles.date}>{formattedDate}</Text>
        <Text style={styles.exercise_title}>{getDayofWeek()} {getTimeOfDayString()} Workout</Text>
        <Timer style={styles.timer} />
      </View>
      <View style={styles.exercise_buttons_container}>
        {WorkoutExercises()}
        <Button
          outline
          onPress={() => {
            navigation.navigate(ExerciseSearchScreenRoute, {
              showAdditionalButtons: true, //give this param a better name
              clickBehavior: {
                highLight: true
              }
            })
          }}
          title=' Add Exercise'
          textStyle={styles.exercise_buttons_text}
          style={styles.exercise_buttons}
        />
        <Button
          outline
          onPress={() => navigation.goBack()}
          title='Cancel Workout'
          textStyle={styles.exercise_buttons_text}
          style={styles.exercise_buttons} />
      </View>
    </ScrollContent>
  )
}

function Timer({ style }) {
  const [seconds, setSeconds] = React.useState(0)

  React.useEffect(() => {
    let interval

    interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <Text style={style}>{formatTime(seconds)}</Text>
  )
}

import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Button } from '@components'
import { ScrollContent } from '@layout'
import { WorkoutExercise } from '@features'
import { ExerciseSearchScreenRoute } from '../exercisesearchscreen/ExerciseSearchScreen'
import { useSaveUserExerciseData } from '@lib/users/exercises/hooks'
import styles from './StartNewWorkoutScreen.styles'

export const StartNewWorkoutScreenRoute = 'StartNewWorkoutScreenRoute'

export function StartNewWorkoutScreen({ navigation, route }) {
  const date = new Date()
  const [exercises, setExercises] = useState([])
  const [finishedExercises, setFinishedExercises] = useState([])
  const { mutate: saveUserExerciseData } = useSaveUserExerciseData()

  useEffect(() => {
    if (route.params?.exercises) {
      setExercises(prev => prev.concat(route.params.exercises))
    }
  }, [route.params?.exercises])

  const getDayofWeek = () => {
    const DAYS_OF_THE_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return DAYS_OF_THE_WEEK[date.getDay()]
  }

  const handleExerciseCallback = childData => {
    setFinishedExercises(prev => {
      const childSetDataNum = childData.exerciseSetsData.map(set => {
        return {
          setNumber: parseInt(set.setNumber),
          reps: parseInt(set.reps),
          rpe: parseInt(set.rpe),
          weight: parseInt(set.weight),
        }
      })

      childData.exerciseSetsData = childSetDataNum

      const newState = prev.filter(exercise => exercise.exerciseId !== childData.exerciseId)

      return [...newState, childData]
    })
  }

  const WorkoutExercises = () => {
    if (exercises) {
      return exercises.map(exercise => (
        <View key={exercise.exerciseId} style={styles.workout_exercise_component_container}>
          <WorkoutExercise parentCallback={handleExerciseCallback} data={exercise} />
        </View>
      ))
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

  const formattedDate = date
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\//g, '-')

  const handleSubmitExerciseData = () => {
    saveUserExerciseData(finishedExercises)
  }

  return (
    <ScrollContent style={styles.scroll_container}>
      <View style={styles.exercise_title_container}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.date}>{formattedDate}</Text>
          <Button
            onPress={handleSubmitExerciseData}
            title="FINISH"
            style={styles.finish_workout_button}
            textStyle={styles.finish_workout_button_text}></Button>
        </View>
        <Text style={styles.exercise_title}>
          {getDayofWeek()} {getTimeOfDayString()} Workout
        </Text>
        <Timer style={styles.timer} />
      </View>
      <View style={styles.workout_exercise_container}>
        {WorkoutExercises()}
        <View style={styles.exercise_buttons_container}>
          <Button
            outline
            onPress={() => {
              navigation.navigate(ExerciseSearchScreenRoute, {
                showAdditionalButtons: true, //give this param a better name
                clickBehavior: {
                  highLight: true,
                },
              })
            }}
            title="Add Exercise"
            textStyle={styles.exercise_buttons_text}
            style={styles.exercise_buttons}
          />
          <Button
            outline
            onPress={() => navigation.goBack()}
            title="Cancel Workout"
            textStyle={styles.exercise_buttons_text}
            style={styles.exercise_buttons}
          />
        </View>
      </View>
    </ScrollContent>
  )
}

function Timer({ style }) {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    let interval

    interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return <Text style={style}>{formatTime(seconds)}</Text>
}

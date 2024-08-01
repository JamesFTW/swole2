import styles from './StartNewWorkoutScreen.styles'
import React, { useEffect, useState, useCallback } from 'react'
import { View, Text } from 'react-native'
import { Button } from '@components'
import { ScrollContent } from '@layout'
import { WorkoutExercise } from '@features'
import { ExerciseSearchScreenRoute } from '../exercisesearchscreen/ExerciseSearchScreen'
import { useSaveUserExerciseData } from '@lib/users/exercises/hooks'
import {
  useSaveCompletedWorkout,
  useWorkoutTitle,
  useFormattedDate,
  useTimer,
  useCreateOrUpdateWeeklySnapshot,
} from '@lib/workouts/hooks'

export const StartNewWorkoutScreenRoute = 'StartNewWorkoutScreenRoute'

export function StartNewWorkoutScreen({ navigation, route }) {
  const [exercises, setExercises] = useState([])
  const [finishedExercises, setFinishedExercises] = useState([])

  const { workoutTitle } = useWorkoutTitle()
  const { formattedDate } = useFormattedDate()
  const { seconds, updateSeconds } = useTimer()

  const { mutate: saveUserExerciseData } = useSaveUserExerciseData()
  const { mutate: saveCompletedWorkout } = useSaveCompletedWorkout()
  const { mutate: createOrUpdateWeeklySnapshot } = useCreateOrUpdateWeeklySnapshot()

  useEffect(() => {
    if (route.params?.exercises) {
      setExercises(prev => [...prev, ...route.params.exercises])
    }
  }, [route.params?.exercises])

  const handleExerciseCallback = useCallback(childData => {
    setFinishedExercises(prev => {
      const updatedChildData = {
        ...childData,
        exerciseSetsData: childData.exerciseSetsData.map(set => ({
          ...set,
          setNumber: parseInt(set.setNumber),
          reps: parseInt(set.reps),
          rpe: parseInt(set.rpe),
          weight: parseInt(set.weight),
          exerciseId: childData.exerciseId,
        })),
      }

      return prev.filter(exercise => exercise.exerciseId !== childData.exerciseId).concat(updatedChildData)
    })
  }, [])

  const handleSubmitExerciseData = useCallback(() => {
    saveUserExerciseData(finishedExercises)
    saveCompletedWorkout(
      { finishedExercises, workoutTitle, date: new Date(), duration: seconds },
      {
        onSuccess: completedWorkoutData => {
          createOrUpdateWeeklySnapshot({
            finishedExercises,
            duration: seconds,
            completedWorkoutData,
          })
        },
      },
    )
  }, [
    finishedExercises,
    workoutTitle,
    seconds,
    saveUserExerciseData,
    saveCompletedWorkout,
    createOrUpdateWeeklySnapshot,
  ])

  const navigateToExerciseSearch = useCallback(() => {
    navigation.navigate(ExerciseSearchScreenRoute, {
      targetRoute: StartNewWorkoutScreenRoute,
      showAdditionalButtons: true,
      clickBehavior: { highLight: true },
    })
  }, [navigation])

  return (
    <ScrollContent style={styles.scroll_container}>
      <WorkoutHeader
        formattedDate={formattedDate}
        workoutTitle={workoutTitle}
        onFinish={handleSubmitExerciseData}
        seconds={seconds}
        updateSeconds={updateSeconds}
      />
      <WorkoutBody
        exercises={exercises}
        handleExerciseCallback={handleExerciseCallback}
        onAddExercise={navigateToExerciseSearch}
        onCancel={() => navigation.goBack()}
      />
    </ScrollContent>
  )
}

function WorkoutHeader({ formattedDate, workoutTitle, onFinish, seconds, updateSeconds }) {
  return (
    <View style={styles.exercise_title_container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.date}>{formattedDate}</Text>
        <Button
          onPress={onFinish}
          title="FINISH"
          style={styles.finish_workout_button}
          textStyle={styles.finish_workout_button_text}
        />
      </View>
      <Text style={styles.exercise_title}>{workoutTitle}</Text>
      <Timer style={styles.timer} seconds={seconds} updateSeconds={updateSeconds} />
    </View>
  )
}

function WorkoutBody({ exercises, handleExerciseCallback, onAddExercise, onCancel }) {
  return (
    <View style={styles.workout_exercise_container}>
      {exercises.map(exercise => (
        <View key={exercise.exerciseId} style={styles.workout_exercise_component_container}>
          <WorkoutExercise parentCallback={handleExerciseCallback} data={exercise} />
        </View>
      ))}
      <View style={styles.exercise_buttons_container}>
        <Button
          outline
          onPress={onAddExercise}
          title="Add Exercise"
          textStyle={styles.exercise_buttons_text}
          style={styles.exercise_buttons}
        />
        <Button
          outline
          onPress={onCancel}
          title="Cancel Workout"
          textStyle={styles.exercise_buttons_text}
          style={styles.exercise_buttons}
        />
      </View>
    </View>
  )
}

function Timer({ style, seconds, updateSeconds }) {
  useEffect(() => {
    const interval = setInterval(() => updateSeconds(prev => prev + 1), 1000)
    return () => clearInterval(interval)
  }, [updateSeconds])

  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return <Text style={style}>{formatTime(seconds)}</Text>
}

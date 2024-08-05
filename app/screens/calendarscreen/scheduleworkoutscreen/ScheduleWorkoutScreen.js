import styles from './ScheduleWorkoutScreen.styles'
import React, { useState, useCallback, useEffect } from 'react'
import { View, Text, Pressable } from 'react-native'
import { COLORS, FONTS, LAYOUT } from '@constants'
import { FormInputV2, Button } from '@components'
import { ScrollContent } from '@layout'
import { WorkoutExercise } from '@features'
import { BackButton, Checkmark, WorkoutCircle } from '@assets/icons'
import { ExerciseSearchScreenRoute } from '../../workoutscreen/exercisesearchscreen/ExerciseSearchScreen'
import { useForm } from 'react-hook-form'

export const ScheduleWorkoutScreenRoute = 'ScheduleWorkoutScreenRoute'

export function ScheduleWorkoutScreen({ workoutId, route, navigation }) {
  const [exercises, setExercises] = useState([])
  const { control, handleSubmit } = useForm({
    defaultValues: {
      workoutName: '',
    },
  })

  useEffect(() => {
    if (route.params?.exercises) {
      setExercises(prevExercises => {
        // Filter out exercises that are already in the state
        const newExercises = route.params.exercises.filter(
          newExercise => !prevExercises.some(prevExercise => prevExercise.exerciseId === newExercise.exerciseId),
        )

        // Combine previous exercises with new, unique exercises
        return [...prevExercises, ...newExercises]
      })
    }
  }, [route.params?.exercises])

  const onSubmit = data => {
    console.log(data)
    // Handle form submission here
  }

  const navigateToExerciseSearch = useCallback(() => {
    navigation.navigate(ExerciseSearchScreenRoute, {
      targetRoute: ScheduleWorkoutScreenRoute,
      showAdditionalButtons: true,
      clickBehavior: { highLight: true },
    })
  }, [navigation])

  const workoutData = {
    exerciseId: 1,
    exerciseName: 'Bench Press',
    targetMuscle: 'Chest',
    secondaryMuscles: ['Triceps', 'Shoulders'],
    // video: 'https://www.youtube.com/watch?v=1oeduv7gBxw',
  }

  return (
    <ScrollContent style={{ height: '100%' }} useSafeArea>
      <ScheduleWorkoutHeader navigation={navigation} onSubmit={handleSubmit(onSubmit)} />
      <ScheduleWorkoutInput control={control} />
      {exercises.length === 0 ? (
        <EmptyWorkoutBody />
      ) : (
        <WorkoutExercise
          style={{ marginHorizontal: 12, marginBottom: 12 }}
          showStatusIndicators={true}
          data={workoutData}
        />
      )}
      {/* <View style={{ marginTop: 26 }}>
        {exercises.map(exercise => (
          <View key={exercise.exerciseId} style={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 14 }}>
            <WorkoutExercise data={exercise} />
          </View>
        ))}
      </View> */}
      <Button
        outline
        onPress={navigateToExerciseSearch}
        title="Add Exercise"
        textStyle={styles.exercise_buttons_text}
        style={styles.exercise_buttons}
      />
    </ScrollContent>
  )
}

const ScheduleWorkoutHeader = ({ navigation, onSubmit }) => {
  return (
    <View style={styles.workoutHeaderContainer}>
      <View style={styles.workoutHeaderContent}>
        <BackButton style={styles.workoutHeaderButtons} height={25} width={19} onPress={() => navigation.goBack()} />
        <Text style={styles.workoutHeaderTitle}> Schedule Workout</Text>
        <Pressable hitSlop={20} style={styles.workoutHeaderButtons} onPress={onSubmit}>
          <Checkmark height={14} width={19} color={COLORS.SUCCESS_BLUE} />
        </Pressable>
      </View>
    </View>
  )
}

const ScheduleWorkoutInput = ({ control }) => {
  return (
    <FormInputV2
      name="workoutTitle"
      control={control}
      rules={{ required: 'Oops! Your workout is missing a title.' }}
      borderOverride
      placeholder="Workout title"
      borderStyles={{
        borderBottomWidth: LAYOUT.SPACING_NUDGE_XS,
        borderBottomColor: COLORS.CARD_BOARDER_COLOR,
      }}
      inputFontFamily={FONTS.SFPRO_MEDIUM}
      inputFontSize={FONTS.SIZE_16}
      placeholderFontFamily={FONTS.SFPRO_REGULAR}
      placeholderFontSize={FONTS.SIZE_16}
      placeholderColor={COLORS.SUBTITLE_GRAY}
      style={{ marginBottom: 16 }}
    />
  )
}

const EmptyWorkoutBody = () => {
  return (
    <View style={{ paddingTop: 40 }}>
      <WorkoutCircle style={{ alignSelf: 'center' }} />
      <Text style={styles.emptyWorkoutBody}>Your workout is empty. Add exercises to get started.</Text>
    </View>
  )
}

import React, { useState, useRef } from 'react'
import { Text, TextInput, Animated, LayoutAnimation, View } from 'react-native'
import { useGetAllExercises } from '@lib/exercises/hooks'
import { Exercise } from '@features'
import { FlexContainer, CustomFlatList } from '@layout'
import { TextButton } from '@components'
import { Search, BackButton } from '@assets/icons'
import { StartNewWorkoutScreenRoute } from '../startnewworkoutscreen/StartNewWorkoutScreen'
import styles from './ExerciseSearchScreen.styles'

export const ExerciseSearchScreenRoute = 'ExerciseSearchScreenRoute'

export function ExerciseSearchScreen({ route, navigation }) {
  const { data, isSuccess } = useGetAllExercises()

  const [selectedExercises, setSelectedExercises] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const fadeAnim = useRef(new Animated.Value(0)).current

  const handleSelectExercise = exercise => {
    const exerciseAlreadySelected = selectedExercises.some(selected => selected.exerciseId === exercise.exerciseId)

    if (!exerciseAlreadySelected) {
      setSelectedExercises(prevSelectedExercises => [...prevSelectedExercises, exercise])
    } else {
      setSelectedExercises(prevSelectedExercises => {
        const updatedSelectedExercises = prevSelectedExercises.filter(
          prevExercise => prevExercise.exerciseId !== exercise.exerciseId,
        )
        return updatedSelectedExercises
      })
    }
  }

  const handleSearch = query => {
    setSearchQuery(query)
    LayoutAnimation.easeInEaseOut()
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }

  const { clickBehavior } = route.params

  const renderExercises = exerciseData => {
    return exerciseData.map(exercise => (
      <View key={exercise.exerciseId} style={{ marginBottom: 20 }}>
        <Exercise clickBehavior={clickBehavior} onSelectExercise={handleSelectExercise} data={exercise} />
      </View>
    ))
  }

  const getExerciseGroups = exerciseData => {
    const exerciseGroups = {}
    exerciseData.forEach(exercise => {
      const firstLetter = exercise.exerciseName.charAt(0).toUpperCase()
      if (exerciseGroups[firstLetter]) {
        exerciseGroups[firstLetter].push(exercise)
      } else {
        exerciseGroups[firstLetter] = [exercise]
      }
    })
    return exerciseGroups
  }

  const filteredExercises = isSuccess
    ? data?.allExercises?.filter(exercise => {
        const exerciseNameMatch = exercise.exerciseName.toLowerCase().includes(searchQuery.toLowerCase())
        const targetMuscleMatch = exercise.targetMuscle.toLowerCase().includes(searchQuery.toLowerCase())

        const secondaryMuscleMatch = exercise.secondaryMuscles[0].secondaryMuscle1
          .toLowerCase()
          .includes(searchQuery.toLowerCase())

        return exerciseNameMatch || targetMuscleMatch || secondaryMuscleMatch
      }) ?? []
    : []

  const exerciseGroups = getExerciseGroups(filteredExercises)

  const HeaderComponent = (
    <>
      <BackButton style={styles.back_button} onPress={() => navigation.goBack()} />
      <FlexContainer style={styles.flex_header_container} direction="row">
        <Text style={styles.exercises_title}>Exercises</Text>
        {route?.params?.showAdditionalButtons ? (
          <FlexContainer direction="row">
            <TextButton style={[styles.exercises_title, { marginRight: 12 }]}> Superset</TextButton>
            <TextButton
              onPress={() =>
                navigation.navigate({
                  name: StartNewWorkoutScreenRoute,
                  params: { exercises: selectedExercises },
                  merge: true,
                })
              }
              style={styles.exercises_title}>
              {' '}
              Add
            </TextButton>
          </FlexContainer>
        ) : null}
      </FlexContainer>
    </>
  )

  const StickyElementComponent = (
    <View style={{ paddingTop: 24, marginBottom: 24, backgroundColor: '#F6F7FA' }}>
      <View style={styles.search_section}>
        <Search style={styles.search_bar} />
        <TextInput
          style={styles.search_input}
          placeholder="Movement, Muscle, Equipment"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <CustomFlatList
        StickyElementComponent={StickyElementComponent}
        HeaderComponent={HeaderComponent}
        data={Object.entries(exerciseGroups)}
        renderItem={({ item }) => (
          <React.Fragment key={item[0]}>
            <Text style={styles.exercise_group_letter}>{item[0]}</Text>
            {renderExercises(item[1])}
          </React.Fragment>
        )}
        keyExtractor={item => item[0]}
        ListEmptyComponent={<Text>No matching exercises found.</Text>}
      />
    </View>
  )
}

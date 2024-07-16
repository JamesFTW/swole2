import React, { useState, useRef } from 'react'
import { Text, TextInput, Animated, View, SafeAreaView } from 'react-native'
import { useGetAllExercises } from '@lib/exercises/hooks'
import { Exercise } from '@features'
import { FlexContainer } from '@layout'
import { TextButton } from '@components'
import { Search, BackButton } from '@assets/icons'
import { StartNewWorkoutScreenRoute } from '../startnewworkoutscreen/StartNewWorkoutScreen'
import styles from './ExerciseSearchScreen.styles'

export const ExerciseSearchScreenRoute = 'ExerciseSearchScreenRoute'

const HEADER_HEIGHT = 130
const STICKY_HEADER_HEIGHT = 100

export function ExerciseSearchScreen({ route, navigation }) {
  const { data, isSuccess, isLoading } = useGetAllExercises()
  const [selectedExercises, setSelectedExercises] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const scrollY = useRef(new Animated.Value(0)).current

  const { clickBehavior, showAdditionalButtons } = route.params

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT - STICKY_HEADER_HEIGHT],
    outputRange: [0, -(HEADER_HEIGHT - STICKY_HEADER_HEIGHT)],
    extrapolate: 'clamp',
  })

  const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })

  const handleSelectExercise = exercise => {
    setSelectedExercises(prevSelected => {
      const isAlreadySelected = prevSelected.some(selected => selected.exerciseId === exercise.exerciseId)
      if (isAlreadySelected) {
        return prevSelected.filter(e => e.exerciseId !== exercise.exerciseId)
      }
      return [...prevSelected, exercise]
    })
  }

  const filteredExercises = useFilteredExercises(data, isSuccess, searchQuery)
  const exerciseGroups = getExerciseGroups(filteredExercises)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F6F7FA' }}>
      <AnimatedHeader
        headerTranslateY={headerTranslateY}
        navigation={navigation}
        showAdditionalButtons={showAdditionalButtons}
        selectedExercises={selectedExercises}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {isLoading ? (
        <LoadingView handleScroll={handleScroll} />
      ) : (
        <AnimatedScrollView
          handleScroll={handleScroll}
          exerciseGroups={exerciseGroups}
          clickBehavior={clickBehavior}
          handleSelectExercise={handleSelectExercise}
        />
      )}
    </SafeAreaView>
  )
}

function AnimatedHeader({
  headerTranslateY,
  navigation,
  showAdditionalButtons,
  selectedExercises,
  searchQuery,
  setSearchQuery,
}) {
  return (
    <Animated.View
      style={[
        styles.header,
        {
          top: 0,
          left: 0,
          right: 0,
          height: HEADER_HEIGHT,
          zIndex: 1,
          backgroundColor: '#F6F7FA',
          transform: [{ translateY: headerTranslateY }],
        },
      ]}>
      <BackButton style={styles.back_button} onPress={() => navigation.goBack()} />
      <FlexContainer style={styles.flex_header_container} direction="row">
        <Text style={styles.exercises_title}>Exercises</Text>
        {showAdditionalButtons && (
          <FlexContainer direction="row">
            <TextButton style={[styles.exercises_title, { marginRight: 12 }]}>
              <Text>Superset</Text>
            </TextButton>
            <TextButton
              onPress={() =>
                navigation.navigate({
                  name: StartNewWorkoutScreenRoute,
                  params: { exercises: selectedExercises },
                  merge: true,
                })
              }
              style={styles.exercises_title}>
              <Text>Add</Text>
            </TextButton>
          </FlexContainer>
        )}
      </FlexContainer>
      <View style={styles.search_section}>
        <Search style={styles.search_bar} />
        <TextInput
          style={styles.search_input}
          placeholder="Movement, Muscle, Equipment"
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor={'#8E8E93'}
        />
      </View>
    </Animated.View>
  )
}

function LoadingView({ handleScroll }) {
  const placeholderGroups = ['A', 'B', 'C'] // Add more letters if needed
  const placeholderExercises = [
    {
      exerciseId: '1',
      exerciseName: 'Loading...',
      targetMuscle: 'Loading...',
      secondaryMuscles: [{ secondaryMuscle1: 'Loading...' }],
    },
    {
      exerciseId: '2',
      exerciseName: 'Loading...',
      targetMuscle: 'Loading...',
      secondaryMuscles: [{ secondaryMuscle1: 'Loading...' }],
    },
    {
      exerciseId: '3',
      exerciseName: 'Loading...',
      targetMuscle: 'Loading...',
      secondaryMuscles: [{ secondaryMuscle1: 'Loading...' }],
    },
  ]

  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scroll_content_container}
      contentContainerStyle={{ paddingTop: 80 }}
      scrollEventThrottle={16}
      onScroll={handleScroll}>
      {placeholderGroups.map(groupLetter => (
        <View key={groupLetter}>
          <Text style={styles.exercise_group_letter}>{groupLetter}</Text>
          {placeholderExercises.map(exercise => (
            <View key={exercise.exerciseId} style={{ marginBottom: 20 }}>
              <Exercise clickBehavior={{}} onSelectExercise={() => {}} data={exercise} isLoading={true} />
            </View>
          ))}
        </View>
      ))}
    </Animated.ScrollView>
  )
}

function AnimatedScrollView({ handleScroll, exerciseGroups, clickBehavior, handleSelectExercise }) {
  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scroll_content_container}
      contentContainerStyle={{ paddingTop: 80 }}
      scrollEventThrottle={16}
      onScroll={handleScroll}>
      {Object.keys(exerciseGroups).length > 0 ? (
        Object.entries(exerciseGroups).map(([groupLetter, exercises]) => (
          <View key={groupLetter}>
            <Text style={styles.exercise_group_letter}>{groupLetter}</Text>
            {renderExercises(exercises, clickBehavior, handleSelectExercise)}
          </View>
        ))
      ) : (
        <Text>No matching exercises found.</Text>
      )}
    </Animated.ScrollView>
  )
}

function useFilteredExercises(data, isSuccess, searchQuery) {
  return isSuccess
    ? data?.allExercises?.filter(exercise => {
        const lowerQuery = searchQuery.toLowerCase()
        return (
          exercise.exerciseName.toLowerCase().includes(lowerQuery) ||
          exercise.targetMuscle.toLowerCase().includes(lowerQuery) ||
          exercise.secondaryMuscles[0].secondaryMuscle1.toLowerCase().includes(lowerQuery)
        )
      }) ?? []
    : []
}

function getExerciseGroups(exerciseData) {
  return exerciseData.reduce((groups, exercise) => {
    const firstLetter = exercise.exerciseName.charAt(0).toUpperCase()
    if (!groups[firstLetter]) {
      groups[firstLetter] = []
    }
    groups[firstLetter].push(exercise)
    return groups
  }, {})
}

function renderExercises(exercises, clickBehavior, onSelectExercise) {
  return exercises.map(exercise => (
    <View key={exercise.exerciseId} style={{ marginBottom: 20 }}>
      <Exercise clickBehavior={clickBehavior} onSelectExercise={onSelectExercise} data={exercise} isLoading={false} />
    </View>
  ))
}

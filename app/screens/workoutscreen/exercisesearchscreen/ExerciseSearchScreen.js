import * as React from 'react'
import { Text, TextInput, Animated, LayoutAnimation, View } from 'react-native'
import { useGetAllExercises } from '../../../lib/exercises/hooks/useGetAllExercises'
import { Exercise } from '../../../features'
import { FlexContainer, ScrollContent } from '../../../layout'
import { TextButton } from '../../../components'
import { Search, BackButton } from '../../../assets/icons'

import styles from './ExerciseSearchScreen.styles'

export const ExerciseSearchScreenRoute = "ExerciseSearchScreenRoute"


export function ExerciseSearchScreen({route, navigation}) {  
  //check if id is cached in async storage.  if not fetch then store
  const {data, isSuccess} = useGetAllExercises()
  const [searchQuery, setSearchQuery] = React.useState('')
  const fadeAnim = React.useRef(new Animated.Value(0)).current

  const { clickBehavior } = route.params
  
  const handleSearch = (query) => {
    setSearchQuery(query)
    LayoutAnimation.easeInEaseOut()
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }

  const renderExercises = (exerciseData) => {
    return exerciseData.map((exercise) => (
      <Exercise
        key={exercise.exerciseId}
        exerciseTitle={exercise.exerciseName}
        secondaryMuscles={exercise.secondaryMuscles}
        exerciseImage={exercise.video}
        targetMuscle={exercise.targetMuscle}
        exerciseId={exercise.exerciseId}
        marginBottom={20}
        clickBehavior={clickBehavior}
      />
    ))
  }

  const getExerciseGroups = (exerciseData) => {
    const exerciseGroups = {}
    exerciseData.forEach((exercise) => {
      const firstLetter = exercise.exerciseName.charAt(0).toUpperCase()
      if (exerciseGroups[firstLetter]) {
        exerciseGroups[firstLetter].push(exercise)
      } else {
        exerciseGroups[firstLetter] = [exercise]
      }
    })
    return exerciseGroups
  }

  const filteredExercises = isSuccess ? (
    data?.allExercises?.filter((exercise) => {
      const exerciseNameMatch = exercise.exerciseName.toLowerCase().includes(searchQuery.toLowerCase())
      const targetMuscleMatch = exercise.targetMuscle.toLowerCase().includes(searchQuery.toLowerCase())
      const secondaryMuscleMatch = exercise.secondaryMuscles[0].secondaryMuscle1.toLowerCase().includes(searchQuery.toLowerCase())

      return exerciseNameMatch || targetMuscleMatch || secondaryMuscleMatch
    }) ?? []
  ) : []
  
  const exerciseGroups = getExerciseGroups(filteredExercises)

  return (
    <ScrollContent showsVerticalScrollIndicator={false} style={styles.scroll_content_container}>
      <BackButton style={styles.back_button} onPress={() => navigation.goBack()}/>
      <FlexContainer style={styles.flex_header_container} direction='row'>
        <Text style={styles.exercises_title}>Exercises</Text>
        {route?.params?.showAdditionalButtons ? (
            <FlexContainer direction='row'>
              <TextButton style={[styles.exercises_title, {marginRight: 12}]}> Superset</TextButton>
              <TextButton style={styles.exercises_title}> Add</TextButton>
            </FlexContainer>
        ): null}
      </FlexContainer>
      <View style={styles.search_section}>
        <Search style={styles.search_bar}/>
          <TextInput
            style={styles.search_input}
            placeholder="Movement, Muscle, Equipment"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
      <Animated.View>
      {Object.keys(exerciseGroups).length > 0 ? (
          Object.entries(exerciseGroups).map(([groupLetter, exercises]) => (
            <React.Fragment key={groupLetter}>
              <Text style={styles.exercise_group_letter}>{groupLetter}</Text>
              {renderExercises(exercises)}
            </React.Fragment>
          ))
        ) : (
          <Text>No matching exercises found.</Text>
        )}
      </Animated.View>
    </ScrollContent>
  )
}

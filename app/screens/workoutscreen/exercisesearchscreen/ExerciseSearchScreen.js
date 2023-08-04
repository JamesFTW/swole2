import * as React from 'react'
import { Text, TextInput, Animated, LayoutAnimation, View } from 'react-native'
import { useGetAllExercises } from '../../../lib/exercises/hooks/useGetAllExercises'
import { Exercise } from '../../../features'
import { ScrollContent } from '../../../layout'
import styles from './ExerciseSearchScreen.styles'
import { Search } from '../../../assets/icons'

export const ExerciseSearchScreenRoute = "ExerciseSearchScreenRoute"


export function ExerciseSearchScreen({navigation}) {  
  //check if id is cached in async storage.  if not fetch then store
  const {data, isSuccess} = useGetAllExercises()
  const [searchQuery, setSearchQuery] = React.useState('')
  const fadeAnim = React.useRef(new Animated.Value(0)).current

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
      <Text style={styles.exercises_title}>Exercises</Text>
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

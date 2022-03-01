import * as React from 'react'
import { getAllExercises } from '../../api/exercise'
import {
  ScrollContent,
  Exercise,
  Header
} from '../../components'
import { Text, View } from 'react-native'

import styles from './WorkoutScreen.styles'

/**
 * 
 * Data that I fetch has to contain actual workout data.
 * exercise,
 * reps,
 * sets,
 * rpe,
 * weight
 */

function WorkoutScreen() {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    getAllExercises()
      .then(exercises => {
        setData(exercises)
      })
  }, [])

  const ExerciseData = data && data.map(exercise => {
    return(
      <Exercise
        exerciseName={exercise.exerciseName}
        reps={10}
        sets={4}
        rpe={9}
        weight={225}
        margin={12}
      />
    )
  })
  
  return (
    <View style={styles.container}>
      <Header />
      {/* {data && ExerciseData } */}
    </View>
  )
}

export default WorkoutScreen;

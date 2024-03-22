import * as React from 'react'
import { getAllExercises } from '../../api/exercise'
import {
  ScrollContent,
  Exercise,
  WorkoutHeader
} from '../../components'

import { View, SafeAreaView } from 'react-native'

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
    <SafeAreaView>
      <WorkoutHeader workoutTitle={"Push Upper Body"} workoutDate={"Wednesday - 11/23/2011"} />
      <ScrollContent>
        <View style={{marginTop: 20}}>
          <Exercise
            exerciseName={"Bench Press"}
            reps={10}
            sets={4}
            rpe={9}
            weight={225}
          />
        </View>
      </ScrollContent>
    </SafeAreaView>
  )
}

export default WorkoutScreen;

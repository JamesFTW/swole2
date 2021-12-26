import * as React from 'react'
import { View } from 'react-native';
import { getAllExercises } from '../../api/exercise'
import {
  ScrollContent,
  Exercise,
} from '../../components'

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
  const [data, setData] = React.useState([])

  // React.useEffect(() => {
  //   getAllExercises()
  //   .then(data => {
  //     console.log(data)
  //     setData(data)
  //   })
  // })

  return (
    <ScrollContent>
      <View style={styles.container}>
        {/** Need to figure out solution for long Exercise names */}
          <Exercise
            exerciseName={"Barebell Deadlift"}
            reps={10}
            sets={4}
            rpe={9}
            weight={225}
          />
          {/* <Collapsible sharedHeight={99}/> */}
      </View>
    </ScrollContent>
  )
}

export default WorkoutScreen;

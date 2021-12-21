import * as React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { ExerciseInfo } from './info'
import { Photo } from '../../components'
import RightArrow from '../../assets/icons/rightarrow.svg'
import styles from './Exercise.styles'

const placeHolder = 'https://cdn.shopify.com/s/files/1/1876/4703/articles/shutterstock_1079398565_2560x.jpg?v=1591108584'

function Exercise({
  exerciseName,
  reps,
  sets,
  rpe,
  weight
}) {
  /**
   * Use effect to pull exercise info
   */
  return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => console.log('press')}>
        <View style={styles.flexContainer}>
          <Photo uri={placeHolder} styles={styles.photo}></Photo>
          <View style={styles.info}>
              <Text style={styles.title}>{ exerciseName }</Text>
              <View style={styles.exerciseInfo}>
                  <ExerciseInfo
                    repCount={reps}
                    setCount={sets}
                    rpeCount={rpe}
                    weightCount={weight}
                  />
              </View>
          </View>
          <RightArrow
            style={styles.rightArrow}
            height={10}
            width={5.39}
          />
        </View>
        </TouchableWithoutFeedback>
      </View>
  )
}

export default Exercise
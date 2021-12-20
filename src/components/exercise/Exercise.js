import * as React from 'react'
import { View, Text } from 'react-native'
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
        <View style={styles.flexContainer}>
          <Photo uri={placeHolder} styles={styles.photo}></Photo>
          <View style={styles.exerciseInfo}>
              <Text style={styles.title}>{ exerciseName }</Text>
              <View style={{paddingTop: 10}}>
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
            width={5}
          />
        </View>
      </View>
  )
}

export default Exercise
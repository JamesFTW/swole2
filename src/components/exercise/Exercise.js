import * as React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { ExerciseInfo } from './info'
import { Photo } from '../../components'
import RightArrow from '../../assets/icons/rightarrow.svg'
import styles from './Exercise.styles'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';


const placeHolder = 'https://cdn.shopify.com/s/files/1/1876/4703/articles/shutterstock_1079398565_2560x.jpg?v=1591108584'

function Exercise({
  exerciseName,
  reps,
  sets,
  rpe,
  weight
}) {
  const [isCollapsed, setCollapsed] = React.useState(true)
  let height = useSharedValue(99);

  const toggle = isCollapsed => {
    //figure out how to dynamically generate these values
    if (isCollapsed === false) {
      height.value = 99 + 500
      return true
    }
    height.value = 99
    return false
  }

 const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(height.value, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1)
      }),
    }
  })

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => setCollapsed(toggle(isCollapsed))}>
      <View style={styles.flexContainer}>
        <Photo uri={placeHolder} styles={styles.photo}/>
        <Animated.View style={[styles.info, animatedStyle]}>
          <Text style={styles.exerciseName}>{ exerciseName }</Text>
          <View style={styles.exerciseInfo}>
            <ExerciseInfo
              repCount={reps}
              setCount={sets}
              rpeCount={rpe}
              weightCount={weight}
            />
          </View>
        </Animated.View>
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
import * as React from 'react'
import { View, Text, Pressable } from 'react-native'
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
  const [isExpanded, setExpand] = React.useState(false) //might want to change to isExpanded
  let height = useSharedValue(99);

  const toggle = isExpanded => {
    //figure out how to dynamically generate these values
    if (isExpanded === false) {
      height.value = 99 + 177
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
      <Pressable onPress={() => setExpand(toggle(isExpanded))}>
      <Animated.View style={[styles.flexContainer, animatedStyle]}>
        <View style={[styles.exercise]}>
          <Photo uri={placeHolder} styles={styles.photo}/>
          <View style={styles.exerciseInfo}>
            <Text style={styles.exerciseName}>{ exerciseName }</Text>
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
      </Animated.View>
      {isExpanded && <View style={styles.indicator}></View>}
      </Pressable>
    </View>
  )
}

export default Exercise
import * as React from 'react'
import { View, Text, Pressable } from 'react-native'
import { ExerciseInfo } from './info'
import { Set } from './set'
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

//Need to remember exercise state

function Exercise({
  exerciseName,
  reps,
  sets,
  rpe,
  weight,
  margin
}) {
  const [isExpanded, setExpand] = React.useState(false) //might want to change to isExpanded
  let height = useSharedValue(99);

  const toggle = isExpanded => {
    //figure out how to dynamically generate these values
    // all of these height values needs to be generated depeneding on the height of
    // the number of sets
    if (isExpanded === false) {
      height.value = 99 + 100 + 48 //this 21 needs to be the height of all the sets
      return true
    }
    height.value = 99
    return false
  }

 const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(height.value, {
        duration: 500,
        easing: Easing.bezier(0.02, 0.01, 0.01, 1.2)
      }),
      overflow: 'hidden',
    }
  })

  /**
   * To get the styles to work I might 
   * have to change the antimated style to inject the Sets componenet somehow
   */

  return (
    <Pressable style={[styles.container, {marginBottom: margin}]} onPress={() => setExpand(toggle(isExpanded))}>
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
        {isExpanded && <Sets/> /** <Set/> needs to generate x num of sets via api */}
      </Animated.View>
    </Pressable>
  )
}

function Sets() {
  return (
    <View style={{position: 'absolute', bottom:0, width: '100%', paddingBottom: 24, overflow: 'hidden'}}>
      <Set set={'1st Set'} />
      <Set set={'2nd Set'} />
      <Set set={'3rd Set'} />
    </View>
  )
}

export default Exercise
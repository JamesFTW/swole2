import * as React from 'react'
import { 
  TouchableWithoutFeedback,
  View,
  Text 
} from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import styles from './Collapsible.styles'

function Collapsible({
  sharedHeight,
  children
}) {
  const [isCollapsed, setCollapsed] = React.useState(true)
  let height = useSharedValue(sharedHeight);

  const toggle = isCollapsed => {
    if (isCollapsed === false) {
      height.value = sharedHeight + 500
      return true
    }

    height.value = sharedHeight
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
    <TouchableWithoutFeedback style={styles.container} onPress={() => setCollapsed(toggle(isCollapsed))} >
      <Animated.View style={[styles.info, animatedStyle]}>
          <View><Text>Hello</Text></View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default Collapsible
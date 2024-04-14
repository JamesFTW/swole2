import * as React from 'react'
import { View, Animated } from 'react-native'
import { Checkmark } from '../../assets/icons'

import styles from './StatusIndicator.styles'

export function StatusIndicator({ isCompleted }) {
  const fadeAnim = React.useRef(new Animated.Value(0))

  React.useEffect(() => {
    if (isCompleted) {
      Animated.timing(fadeAnim.current, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start()
    }
  }, [isCompleted, fadeAnim])

  return (
    <View
      style={
        isCompleted
          ? styles.day_of_week_indicator_completed
          : styles.day_of_week_indicator
      }>
      <Animated.View style={{ opacity: fadeAnim.current }}>
        {isCompleted && <Checkmark />}
      </Animated.View>
    </View>
  )
}

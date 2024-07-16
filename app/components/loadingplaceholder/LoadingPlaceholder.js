import React from 'react'
import styles from './LoadingPlaceholder.styles'
import { View, Animated } from 'react-native'
import { COLORS } from '@constants'
import LinearGradient from 'react-native-linear-gradient'

export function LoadingPlaceholder({ width, height, style }) {
  const translateX = React.useRef(new Animated.Value(-width)).current

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: width,
        duration: 1000,
        useNativeDriver: true,
      }),
    ).start()
  }, [width])

  return (
    <View
      style={[
        {
          width,
          height,
          backgroundColor: COLORS.BACKGROUND_COLOR,
          borderRadius: 4,
          overflow: 'hidden',
        },
        style,
      ]}>
      <Animated.View
        style={{
          width: '100%',
          height: '100%',
          transform: [{ translateX }],
        }}>
        <LinearGradient
          colors={COLORS.LOADING_GRADIENT}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.linear_gradient}
        />
      </Animated.View>
    </View>
  )
}

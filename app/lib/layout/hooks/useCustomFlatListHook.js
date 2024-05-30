import { useRef, useState, useEffect } from 'react'
import { Animated, Dimensions, StyleSheet } from 'react-native'

const window = Dimensions.get('window')

export const useCustomFlatListHook = () => {
  const scrollY = useRef(new Animated.Value(0)).current
  const [heights, setHeights] = useState({ header: 0, sticky: 0, topList: 0 })
  const [scrollDirection, setScrollDirection] = useState(null)
  const scrollYCurrent = useRef(0)

  useEffect(() => {
    const listener = scrollY.addListener(({ value }) => {
      scrollYCurrent.current = value
      const offset = value
      if (offset > scrollYCurrent.current && scrollDirection !== 'down') {
        setScrollDirection('down')
      } else if (offset < scrollYCurrent.current && scrollDirection !== 'up') {
        setScrollDirection('up')
      }
    })

    return () => {
      scrollY.removeListener(listener)
    }
  }, [scrollDirection, scrollY])

  const styles = StyleSheet.create({
    header: {
      marginBottom: heights.sticky + heights.topList,
      zIndex: 3,
    },
    stickyElement: {
      left: 0,
      marginTop: heights.header,
      position: 'absolute',
      right: 0,
      transform: [
        {
          translateY: scrollY.interpolate({
            extrapolate: 'clamp',
            inputRange: [-window.height, heights.header],
            outputRange: [window.height, -heights.header],
          }),
        },
      ],
      zIndex: 2,
    },
    topElement: {
      left: 0,
      marginTop: heights.header + heights.sticky,
      position: 'absolute',
      right: 0,
      transform: [
        {
          translateY: scrollY.interpolate({
            extrapolate: 'clamp',
            inputRange: [-window.height, heights.header + heights.sticky + heights.topList],
            outputRange: [window.height, -(heights.header + heights.sticky + heights.topList)],
          }),
        },
      ],
      zIndex: 1,
    },
  })

  const onLayoutHeaderElement = event => {
    setHeights({ ...heights, header: event.nativeEvent.layout.height })
  }

  const onLayoutTopListElement = event => {
    setHeights({ ...heights, topList: event.nativeEvent.layout.height })
  }

  const onLayoutTopStickyElement = event => {
    setHeights({ ...heights, sticky: event.nativeEvent.layout.height })
  }

  const headerTranslateY = scrollY.interpolate({
    inputRange: [-window.height, 0, heights.header, heights.header + window.height / 4],
    outputRange: [-heights.header, 0, 0, -heights.header],
    extrapolate: 'clamp',
  })

  const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })

  return [
    scrollY,
    { ...styles, header: { ...styles.header, transform: [{ translateY: headerTranslateY }] } },
    onLayoutHeaderElement,
    onLayoutTopListElement,
    onLayoutTopStickyElement,
    handleScroll,
  ]
}

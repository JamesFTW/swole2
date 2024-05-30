import React from 'react'
import { useCustomFlatListHook } from '@lib/layout/hooks/useCustomFlatListHook'
import { Animated, View } from 'react-native'

export const CustomFlatList = props => {
  const [scrollY, styles, onLayoutHeaderElement, onLayoutTopListElement, onLayoutStickyElement, handleScroll] =
    useCustomFlatListHook()

  return (
    <View style={props.style}>
      <Animated.View style={styles.stickyElement} onLayout={onLayoutStickyElement}>
        {props.StickyElementComponent}
      </Animated.View>
      <Animated.View style={styles.topElement} onLayout={onLayoutTopListElement}>
        {props.TopListElementComponent}
      </Animated.View>
      <Animated.View>
        <Animated.FlatList
          {...props}
          ListHeaderComponent={<Animated.View onLayout={onLayoutHeaderElement}>{props.HeaderComponent}</Animated.View>}
          ListHeaderComponentStyle={[props.ListHeaderComponentStyle, styles.header]}
          onScroll={handleScroll}
          showsVerticalScrollIndicator={false}
        />
      </Animated.View>
    </View>
  )
}

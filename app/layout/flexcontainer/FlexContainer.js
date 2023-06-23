import * as React from 'react'
import styles from './FlexContainer.styles'
import { View } from 'react-native'

export function FlexContainer({
  children,
  direction,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  textAlign,
  alignItems,
  style
}) {

  return (
    <View style={[styles.flex_container, {
      'flexDirection': direction,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
      textAlign,
      alignItems,
      }, style
    ]}>
      { children }
    </View>
  )
}

export default FlexContainer
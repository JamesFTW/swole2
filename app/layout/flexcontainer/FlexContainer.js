import * as React from 'react'
import styles from './FlexContainer.styles'
import { View } from 'react-native'

export function FlexContainer({ children, direction = 'row' }) {
  return (
    <View style={[styles.flex_container, {'flexDirection': direction}]}>
        { children }
    </View>
  )
}

export default FlexContainer
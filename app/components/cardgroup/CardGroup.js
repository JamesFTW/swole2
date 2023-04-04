
import * as React from 'react'
import styles from './CardGroup.styles'
import { View } from 'react-native';
import { ScrollContent } from '../../layout'

export function CardGroup({ children }) {
  if (children.length) {
    return (
      <ScrollContent>
        {children.map((card, i) => {
          return (
            <View style={styles.cardGroupChild} key={i}>
              { card }
            </View>
          )
        })}
      </ScrollContent>
    )
  }

  return (
    <ScrollContent>
      <View style={styles.cardGroupChild}>
        { children }
      </View>
    </ScrollContent>
  )
}

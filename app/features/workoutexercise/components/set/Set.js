import * as React from 'react'
import { Text } from 'react-native'
import { FlexContainer } from '../../../../layout'
import { StatusIndicator } from '../../../../components'

import styles from './Set.styles'

export function Set({
  setNumber,
  reps,
  rpe,
  weight
}) {
  return (
    <FlexContainer style={{ marginTop: 10}} direction="row">
      <Text style={styles.set_info}>{setNumber}</Text>
      <Text style={styles.set_info}>{reps}</Text>
      <Text style={styles.set_info}>{rpe}</Text>
      <Text style={[styles.set_info]}>{weight}</Text>
      <StatusIndicator isCompleted/>
  </FlexContainer>
  )
}
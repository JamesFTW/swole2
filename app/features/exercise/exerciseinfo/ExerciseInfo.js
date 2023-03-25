
import * as React from 'react'
import { Text } from 'react-native'
import { FlexContainer } from '../../../layout'
import styles from './ExerciseInfo.styles'

export function ExerciseInfo({
  value,
  subTitle,
  }) {
    return (
      <FlexContainer direction='column'>
        <>
        <Text style={styles.exercise_subtitle}>{ value }</Text>
        <Text style={styles.exercise_subtitle}>{ subTitle }</Text>
        </>
      </FlexContainer>
  )
}

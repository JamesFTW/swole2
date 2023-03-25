
import * as React from 'react'
import { Text } from 'react-native'
import { Card, Image } from '../../components'
import { FlexContainer } from '../../layout'
import styles from './Exercise.styles'

export function Exercise({
  exerciseTitle = "Bench Press",
}) {
  return (
    <Card>
      <FlexContainer direction='row'>
        <Image/>
        <FlexContainer direction='column'>
          <Text style={styles.exercise_title}>{ exerciseTitle }</Text>
          <>
          <Text style={styles.exercise_subtitle}>Bruh</Text>
          <Text style={styles.exercise_subtitle}>Bruh</Text>
          </>
        </FlexContainer>
      </FlexContainer>
    </Card>
  )
}

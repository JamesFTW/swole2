
import * as React from 'react'
import { Text } from 'react-native'
import { Card, Image } from '../../components'
import { ExerciseInfo } from './exerciseinfo/ExerciseInfo'
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
          <FlexContainer>
            <ExerciseInfo value="225" subTitle="lbs" />
            <ExerciseInfo value="225" subTitle="lbs" />
            <ExerciseInfo value="225" subTitle="lbs" />
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </Card>
  )
}

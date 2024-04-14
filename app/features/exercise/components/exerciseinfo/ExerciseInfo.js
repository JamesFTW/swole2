import * as React from 'react'
import { Text } from 'react-native'
import { FlexContainer } from '../../../../layout'
import { LAYOUT } from '../../../../constants'
import styles from './ExerciseInfo.styles'

export function ExerciseInfo({ value, subTitle }) {
  return (
    <FlexContainer
      marginRight={LAYOUT.SPACING_LG_56}
      direction={LAYOUT.FLEX_COLUMN}>
      <>
        <Text
          style={[
            styles.exercise_subtitle,
            { paddingTop: LAYOUT.SPACING_XS_4 },
          ]}>
          {value}
        </Text>
        <Text style={styles.exercise_subtitle}>{subTitle}</Text>
      </>
    </FlexContainer>
  )
}

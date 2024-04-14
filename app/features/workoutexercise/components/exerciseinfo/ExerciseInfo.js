import * as React from 'react'
import { Text, View } from 'react-native'
import { FlexContainer } from '../../../../layout'
import { LAYOUT } from '../../../../constants'
import styles from './ExerciseInfo.styles'

export function ExerciseInfo({ value, subTitle, style }) {
  return (
    <FlexContainer direction={LAYOUT.FLEX_COLUMN} style={style}>
      <View style={styles.container}>
        <Text
          style={[
            styles.exercise_subtitle_number,
            { paddingTop: LAYOUT.SPACING_XS_4 },
          ]}>
          {value}
        </Text>
        <Text style={styles.exercise_subtitle}>{subTitle}</Text>
      </View>
    </FlexContainer>
  )
}

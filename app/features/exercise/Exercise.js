import * as React from 'react'
import { Text } from 'react-native'
import { Card, Image, ActionGroup } from '../../components'
import { LAYOUT } from '../../constants'
import { FlexContainer } from '../../layout'
import styles from './Exercise.styles'

export function Exercise({
  exerciseTitle,
  primaryMuscleGroup,
  exerciseImage
}) {
  return (
    <Card cardHeight={LAYOUT.SPACING_XL_76}>
      <FlexContainer direction={LAYOUT.FLEX_ROW}>
        <Image
          src={exerciseImage}
          height={50}
          width={50}
          borderRadius={25}
          marginTop={LAYOUT.SPACING_NUDGE_S}
        />
        <FlexContainer direction={LAYOUT.FLEX_COLUMN}>
          <FlexContainer>
            <Text style={styles.exercise_title}>{ exerciseTitle }</Text>
          </FlexContainer>
          <ActionGroup marginLeft={LAYOUT.SPACING_XS_16} marginTop={LAYOUT.SPACING_XS_8} actionTitles={primaryMuscleGroup} />
        </FlexContainer>
      </FlexContainer>
    </Card>
  )
}

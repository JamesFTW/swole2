
import * as React from 'react'
import { Text } from 'react-native'
import { ExerciseInfo } from './components/exerciseinfo/ExerciseInfo'
import { Card, Image } from '../../components'
import { LAYOUT } from '../../constants'
import { FlexContainer } from '../../layout'
import styles from './WorkoutExercise.styles'

export function WorkoutExercise({
  exerciseTitle,
  sets,
  reps,
  weight
}) {
  const SUBTITLE = {
    SETS: 'sets',
    REPS: 'reps',
    WEIGHT: 'lbs' //TODO: convert this to something that can render lbs or kgs based on region.
  }
  return (
    <Card borderRadius>
      <FlexContainer direction={LAYOUT.FLEX_ROW}>
        <Image
          height={LAYOUT.SPACING_LG_60}
          width={LAYOUT.SPACING_LG_60}
          borderRadius={30} marginTop={LAYOUT.SPACING_NUDGE_S}/>
        <FlexContainer direction={LAYOUT.FLEX_COLUMN}>
          <FlexContainer>
            <Text style={styles.exercise_title}>{ exerciseTitle }</Text>
          </FlexContainer>
          <FlexContainer direction={LAYOUT.FLEX_ROW} marginLeft={22}>
              <ExerciseInfo value={sets} subTitle={SUBTITLE.SETS} />
              <ExerciseInfo value={reps} subTitle={SUBTITLE.REPS} />
              <ExerciseInfo value={weight} subTitle={SUBTITLE.WEIGHT} />
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </Card>
  )
}

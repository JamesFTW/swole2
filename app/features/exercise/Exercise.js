import * as React from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Card, Image, ActionGroup } from '../../components'
import { LAYOUT } from '../../constants'
import { FlexContainer } from '../../layout'
import { WorkoutScreenStackRoute } from '../../screens/workoutscreen'
import { ExerciseDetailsRoute } from './exercisedetails/ExerciseDetails'
import styles from './Exercise.styles'

export const ExerciseRoute = 'ExerciseRoute'

export function Exercise({
  exerciseTitle,
  secondaryMuscles,
  exerciseImage,
  targetMuscle,
  marginBottom,
  exerciseId,
  clickBehavior,
  onSelectExercise
}) {

  const navigation = useNavigation()
  const secondaryMuscle = secondaryMuscles[0].secondaryMuscle1

  const [highLight, setHighLight] = React.useState(false)
  let [exercise, setExercise] = React.useState({})

  const clickBehaviorHandler = () => {
    if (clickBehavior.navigate) {
      return (
        navigation.navigate(WorkoutScreenStackRoute, {
          screen: ExerciseDetailsRoute,
          params: {
            exerciseInfo: {
              exerciseTitle,
              secondaryMuscles,
              exerciseImage,
              targetMuscle,
              exerciseId
            }
          }
        })
      )
    }

    if (clickBehavior.highLight) {
      exercise = {
        exerciseTitle,
        secondaryMuscles,
        exerciseImage,
        targetMuscle,
        exerciseId
      }
      onSelectExercise(exercise)
      setExercise(exercise)
      setHighLight(!highLight)
    }
  }

  return (
    <View style={{marginBottom: marginBottom}}>
      <Card borderRadius
        onPress={() => clickBehaviorHandler()}
        cardHeight={LAYOUT.SPACING_XL_76}
        style={highLight && styles.highlighted_exercise_card}
        >
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
            <Text style={highLight? styles.highlighted_exercise_title : styles.exercise_title}>{ exerciseTitle }</Text>
          </FlexContainer>
          <ActionGroup
            marginLeft={LAYOUT.SPACING_XS_16}
            marginTop={LAYOUT.SPACING_XS_8}
            actionTitles={[targetMuscle, secondaryMuscle]}
          />
        </FlexContainer>
      </FlexContainer>
      </Card>
    </View>
  )
}

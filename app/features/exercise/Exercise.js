import React from 'react'
import styles from './Exercise.styles'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Card, ActionGroup } from '@components'
import { LAYOUT } from '@constants'
import { FlexContainer } from '@layout'
import { WorkoutScreenStackRoute } from '@screens/workoutscreen'
import { FasterImageView } from '@candlefinance/faster-image'
import { ExerciseDetailsRoute } from './exercisedetails/ExerciseDetails'

export const ExerciseRoute = 'ExerciseRoute'

export function Exercise({ clickBehavior, onSelectExercise, data }) {
  const [highLight, setHighLight] = React.useState(false)
  const { exerciseName, secondaryMuscles, video, targetMuscle, exerciseId } = data
  const secondaryMuscle = secondaryMuscles[0].secondaryMuscle1

  const navigation = useNavigation()

  const clickBehaviorHandler = () => {
    if (clickBehavior.navigate) {
      return navigation.navigate(WorkoutScreenStackRoute, {
        screen: ExerciseDetailsRoute,
        params: {
          exerciseInfo: {
            exerciseName,
            secondaryMuscles,
            video,
            targetMuscle,
            exerciseId,
          },
        },
      })
    }

    if (clickBehavior.highLight) {
      const exercise = {
        exerciseName,
        secondaryMuscles,
        video,
        targetMuscle,
        exerciseId,
      }

      onSelectExercise(exercise)
      setHighLight(!highLight)
    }
  }

  return (
    <Card
      borderRadius
      onPress={() => clickBehaviorHandler()}
      cardHeight={LAYOUT.SPACING_XL_76}
      style={highLight && styles.highlighted_exercise_card}>
      <FlexContainer direction={LAYOUT.FLEX_ROW}>
        <FasterImageView
          style={styles.exercise_image}
          source={{
            transitionDuration: 0.3,
            cachePolicy: 'discWithCacheControl',
            showActivityIndicator: true,
            url: video,
            resizeMode: 'cover',
          }}
          borderRadius={25}
        />
        <FlexContainer direction={LAYOUT.FLEX_COLUMN}>
          <FlexContainer>
            <Text style={highLight ? styles.highlighted_exercise_title : styles.exercise_title}>{exerciseName}</Text>
          </FlexContainer>
          <ActionGroup
            marginLeft={LAYOUT.SPACING_XS_16}
            marginTop={LAYOUT.SPACING_XS_8}
            actionTitles={[targetMuscle, secondaryMuscle]}
          />
        </FlexContainer>
      </FlexContainer>
    </Card>
  )
}

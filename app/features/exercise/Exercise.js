import React from 'react'
import styles from './Exercise.styles'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Card, ActionGroup, LoadingPlaceholder } from '@components'
import { LAYOUT } from '@constants'
import { FlexContainer } from '@layout'
import { WorkoutScreenStackRoute } from '@screens/workoutscreen'
import { FasterImageView } from '@candlefinance/faster-image'
import { ExerciseDetailsRoute } from './exercisedetails/ExerciseDetails'

export const ExerciseRoute = 'ExerciseRoute'

export function ExerciseLoading() {
  return (
    <Card borderRadius cardHeight={LAYOUT.SPACING_XL_76}>
      <FlexContainer direction={LAYOUT.FLEX_ROW}>
        <LoadingPlaceholder width={50} height={50} style={{ borderRadius: 25 }} />
        <FlexContainer direction={LAYOUT.FLEX_COLUMN}>
          <FlexContainer>
            <LoadingPlaceholder width={150} height={20} style={{ marginBottom: LAYOUT.SPACING_XS_8 }} />
          </FlexContainer>
          <FlexContainer
            direction={LAYOUT.FLEX_ROW}
            style={{ marginLeft: LAYOUT.SPACING_XS_16, marginTop: LAYOUT.SPACING_XS_8 }}>
            <LoadingPlaceholder width={80} height={24} style={{ marginRight: LAYOUT.SPACING_XS_8 }} />
            <LoadingPlaceholder width={80} height={24} />
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </Card>
  )
}

export function Exercise({ clickBehavior, onSelectExercise, data, isLoading }) {
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

  if (isLoading) {
    return <ExerciseLoading />
  }

  return (
    <Card
      borderRadius={LAYOUT.SPACING_XS_12}
      onPress={() => clickBehaviorHandler()}
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

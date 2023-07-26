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

//Rename primaryMuscleGroup to secondaryMuscleGroups
export function Exercise({
  exerciseTitle,
  secondaryMuscles,
  exerciseImage,
  targetMuscle,
  marginBottom
}) {
  const navigation = useNavigation()
  const secondaryMuscle = secondaryMuscles[0].secondaryMuscle1

  return (
    <View style={{marginBottom: marginBottom}}>
      <Card borderRadius
        onPress={() => {
          navigation.navigate(WorkoutScreenStackRoute, {
            screen: ExerciseDetailsRoute,
            params: {
              exerciseInfo: {
                exerciseTitle,
                secondaryMuscles,
                exerciseImage,
                targetMuscle
              }
            }
          })
        }}
        cardHeight={LAYOUT.SPACING_XL_76}>
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

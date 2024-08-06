import styles from './WorkoutExercise.styles'
import React, { useEffect, useState } from 'react'
import { Text, Animated, View, ActionSheetIOS } from 'react-native'
import { Set } from '../workoutexercise/components/set/Set'
import { Button, Card } from '@components'
import { LAYOUT, COLORS } from '@constants'
import { FlexContainer } from '@layout'
import { Dumbell } from '@assets/icons'
import { FasterImageView } from '@candlefinance/faster-image'

const initialSet = {
  setNumber: 1,
  reps: '0',
  rpe: '0',
  weight: '0',
  isCompletedSet: false,
}

export function WorkoutExercise({ parentCallback, data, showStatusIndicators = false, style }) {
  const [exerciseSetsData, setExerciseSetsData] = useState([initialSet])
  const [isCompletedAnimation] = useState(new Animated.Value(0))
  const { exerciseId, exerciseName, targetMuscle, secondaryMuscles } = data

  const isExerciseSetsDataCompleted = () => {
    return exerciseSetsData.every(set => set.isCompletedSet)
  }

  useEffect(() => {
    if (isExerciseSetsDataCompleted()) {
      animateIsCompleted()
    }

    if (parentCallback) {
      parentCallback({ exerciseSetsData, exerciseId, targetMuscle, exerciseName, secondaryMuscles })
    }
  }, [exerciseSetsData])

  const onPress = exerciseId =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Remove', 'Cancel'],
        destructiveButtonIndex: 0,
        cancelButtonIndex: 1,
        userInterfaceStyle: 'light',
        title: 'Remove Set',
        message: 'Are you sure you want to remove this set?',
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          const filteredSets = exerciseSetsData.filter(set => set.setNumber !== exerciseId)
          const updatedSets = filteredSets.map((set, i) => ({
            ...set,
            setNumber: i + 1,
          }))
          setExerciseSetsData(updatedSets)
        }
      },
    )

  const addSet = () => {
    const newSetNumber = exerciseSetsData.length + 1
    const newSet = {
      setNumber: newSetNumber,
      reps: '0',
      rpe: '0',
      weight: '0',
      isCompletedSet: false,
    }
    setExerciseSetsData([...exerciseSetsData, newSet])
  }

  const handleSetChange = (setNumber, property, value) => {
    const updatedSets = exerciseSetsData.map(set => {
      if (set.setNumber === setNumber) {
        if (property === 'isCompletedSet') {
          return { ...set, isCompletedSet: !set.isCompletedSet }
        } else {
          return { ...set, [property]: value }
        }
      } else {
        return set
      }
    })
    setExerciseSetsData(updatedSets)
  }

  const animateIsCompleted = () => {
    Animated.timing(isCompletedAnimation, {
      toValue: 1,
      duration: 150,
      useNativeDriver: false,
    }).start()
  }

  return (
    <Card
      style={style}
      borderRadius={LAYOUT.SPACING_XS_12}
      elevation={3}
      backgroundColor={COLORS.WHITE_WHITE}
      borderColor={COLORS.CARD_BOARDER_COLOR}
      contentStyle={styles.cardContent}
      padding={LAYOUT.SPACING_XS_12}>
      <View style={styles.exerciseHeader}>
        <FlexContainer direction={LAYOUT.FLEX_ROW}>
          <FasterImageView
            style={styles.exercise_image}
            source={{
              transitionDuration: 0.3,
              cachePolicy: 'discWithCacheControl',
              showActivityIndicator: true,
              url: data.video,
              resizeMode: 'cover',
            }}
            borderRadius={25}
          />
          <FlexContainer style={styles.exerciseTitleContainer} direction={LAYOUT.FLEX_COLUMN}>
            <Text style={styles.exercise_title}>{exerciseName}</Text>
          </FlexContainer>
        </FlexContainer>
        {isExerciseSetsDataCompleted() && (
          <Animated.View style={[styles.exercise_completion_icon, { opacity: isCompletedAnimation }]}>
            <Dumbell isCompletedExercise />
          </Animated.View>
        )}
      </View>
      <View style={styles.drawer_set_header}>
        <FlexContainer style={styles.setHeaderRow} direction="row">
          <Text style={[styles.sets_header, styles.setHeaderCell]}>set</Text>
          <Text style={[styles.sets_header, styles.setHeaderCell]}>reps</Text>
          <Text style={[styles.sets_header, styles.setHeaderCell]}>rpe</Text>
          <Text style={[styles.sets_header, styles.setHeaderCell]}>lbs</Text>
        </FlexContainer>
        <FlexContainer direction="column" style={styles.setsContainer}>
          {exerciseSetsData.map(exerciseSet => (
            <Set
              onLongPress={() => onPress(exerciseSet.setNumber)}
              key={exerciseSet.setNumber}
              setNumber={exerciseSet.setNumber}
              reps={exerciseSet.reps}
              rpe={exerciseSet.rpe}
              weight={exerciseSet.weight}
              isCompletedSet={exerciseSet.isCompletedSet}
              onRepsChange={value => handleSetChange(exerciseSet.setNumber, 'reps', value)}
              onRpeChange={value => handleSetChange(exerciseSet.setNumber, 'rpe', value)}
              onWeightChange={value => handleSetChange(exerciseSet.setNumber, 'weight', value)}
              onSetCompletionChange={() => handleSetChange(exerciseSet.setNumber, 'isCompletedSet')}
              showStatusIndicators={showStatusIndicators}
            />
          ))}
        </FlexContainer>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={addSet} textStyle={styles.add_set_button_text} style={styles.add_set_button} title="Add Set" />
      </View>
    </Card>
  )
}

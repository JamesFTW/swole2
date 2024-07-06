import React, { useEffect, useState } from 'react'
import { Text, Animated, Easing, View, Pressable, ActionSheetIOS } from 'react-native'
import { ExerciseInfo } from './components/exerciseinfo/ExerciseInfo'
import { Set } from './components/set/Set'
import { Card, Button } from '@components'
import { LAYOUT } from '@constants'
import { FlexContainer } from '@layout'
import { Dumbell } from '@assets/icons'
import { FasterImageView } from '@candlefinance/faster-image'
import styles from './WorkoutExercise.styles'

function ExerciseHeader({ setNumber, reps, rpe, weight, style }) {
  const SUBTITLE = {
    SETS: 'set',
    REPS: 'reps',
    WEIGHT: 'lbs', // TODO: convert this to something that can render lbs or kgs based on region.
    RPE: 'rpe',
  }
  return (
    <>
      <ExerciseInfo style={style} value={setNumber} subTitle={SUBTITLE.SETS} />
      <ExerciseInfo style={style} value={reps} subTitle={SUBTITLE.REPS} />
      <ExerciseInfo style={style} value={rpe} subTitle={SUBTITLE.RPE} />
      <ExerciseInfo style={style} value={weight} subTitle={SUBTITLE.WEIGHT} />
    </>
  )
}

const initialSet = {
  setNumber: 1,
  reps: '0',
  rpe: '0',
  weight: '0',
  isCompletedSet: false,
}

export function WorkoutExercise({ parentCallback, data }) {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [animation] = useState(new Animated.Value(0))
  const [isCompletedAnimation] = useState(new Animated.Value(0))
  const [expandedContentHeight, setExpandedContentHeight] = useState(220)
  const [exerciseSetHeader, setExerciseSetHeader] = useState(initialSet)
  const [exerciseSetsData, setExerciseSetsData] = useState([initialSet])
  const { exerciseId, exerciseName, targetMuscle, secondaryMuscles } = data

  const isExerciseSetsDataCompleted = () => {
    for (const set of exerciseSetsData) {
      if (set.isCompletedSet === false) return false
    }
    return true
  }

  useEffect(() => {
    handleHeaderSetChange()
    isExerciseSetsDataCompleted()

    if (isExerciseSetsDataCompleted()) {
      animateIsCompleted()
    }

    parentCallback({ exerciseSetsData, exerciseId, targetMuscle, exerciseName, secondaryMuscles })
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
          const updatedSets = filteredSets.map((set, i) => {
            return {
              ...set,
              setNumber: i + 1,
            }
          })
          setExerciseSetsData(updatedSets)
          shrinkCardHeight()
        }
      },
    )

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
    Animated.timing(animation, {
      toValue: isCollapsed ? 1 : 0,
      duration: 150,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start()
  }

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
    expandCardHeight()
  }

  const expandCardHeight = () => {
    const newSetHeight = 30
    setExpandedContentHeight(expandedContentHeight + newSetHeight)
  }

  const shrinkCardHeight = () => {
    const newSetHeight = 30
    setExpandedContentHeight(expandedContentHeight - newSetHeight)
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

  const handleHeaderSetChange = () => {
    for (const currentExercise of exerciseSetsData) {
      if (currentExercise.isCompletedSet !== true) {
        setExerciseSetHeader(currentExercise)
        break
      }
    }
  }

  const additionalContentOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  })

  const cardHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [92, expandedContentHeight],
  })

  const animateIsCompleted = () => {
    Animated.timing(isCompletedAnimation, {
      toValue: 1,
      duration: 150,
      useNativeDriver: false,
    }).start()
  }

  return (
    <Card cardHeight={cardHeight} borderRadius>
      <Pressable onPress={toggleCollapse}>
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
          <FlexContainer direction={LAYOUT.FLEX_COLUMN}>
            <FlexContainer>
              <Text style={styles.exercise_title}>{exerciseName}</Text>
            </FlexContainer>
            <FlexContainer direction={LAYOUT.FLEX_ROW} marginLeft={2}>
              <ExerciseHeader
                rpe={exerciseSetHeader.rpe}
                reps={exerciseSetHeader.reps}
                setNumber={exerciseSetHeader.setNumber}
                weight={exerciseSetHeader.weight}
                style={styles.exercise_header}
              />
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </Pressable>
      {!isCollapsed && (
        <Animated.View style={{ opacity: additionalContentOpacity }}>
          <View style={styles.drawer_set_header}>
            <FlexContainer style={{ justifyContent: 'space-between' }} direction="row">
              <Text style={styles.sets_header}>set</Text>
              <Text style={styles.sets_header}>reps</Text>
              <Text style={styles.sets_header}>rpe</Text>
              <Text style={styles.sets_header}>lbs</Text>
            </FlexContainer>
            <FlexContainer direction="column">
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
                />
              ))}
            </FlexContainer>
          </View>
        </Animated.View>
      )}
      {!isCollapsed && (
        <Button onPress={addSet} textStyle={styles.add_set_button_text} style={styles.add_set_button} title="Add Set" />
      )}
      {isExerciseSetsDataCompleted() ? (
        <Animated.View style={[styles.exercise_completion_icon, { opacity: isCompletedAnimation }]}>
          <Dumbell isCompletedExercise />
        </Animated.View>
      ) : null}
    </Card>
  )
}

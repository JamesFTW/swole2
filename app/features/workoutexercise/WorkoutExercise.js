import React from 'react'
import { Text, Animated, Easing, View, Pressable, ActionSheetIOS } from 'react-native'
import { ExerciseInfo } from './components/exerciseinfo/ExerciseInfo'
import { Card, Image, Button } from '../../components'
import { LAYOUT } from '../../constants'
import { FlexContainer } from '../../layout'
import { Set } from './components/set/Set'
import styles from './WorkoutExercise.styles'

function ExerciseHeader({
  setNumber,
  reps,
  rpe,
  weight,
}) {
  const SUBTITLE = {
    SETS: 'set',
    REPS: 'reps',
    WEIGHT: 'lbs', // TODO: convert this to something that can render lbs or kgs based on region.
    RPE: 'rpe',
  }
  return (
    <>
      <ExerciseInfo value={setNumber} subTitle={SUBTITLE.SETS} />
      <ExerciseInfo value={reps} subTitle={SUBTITLE.REPS} />
      <ExerciseInfo value={rpe} subTitle={SUBTITLE.RPE} />
      <ExerciseInfo value={weight} subTitle={SUBTITLE.WEIGHT} />
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

export function WorkoutExercise({
  exerciseTitle,
  exerciseImage
}) {
  const [isCollapsed, setIsCollapsed] = React.useState(true)
  const [animation] = React.useState(new Animated.Value(0))
  const [expandedContentHeight, setExpandedContentHeight] = React.useState(220)
  const [exerciseSetHeader, setExerciseSetHeader] = React.useState(initialSet)
  const [exerciseSets, setExerciseSets] = React.useState([initialSet])

  React.useEffect(() => {
    handleHeaderSetChange()
  }, [exerciseSets])

  const onPress = (exerciseId) =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [ 'Remove', 'Cancel'],
        destructiveButtonIndex: 0,
        cancelButtonIndex: 1,
        userInterfaceStyle: 'light',
        title: 'Remove Set',
        message: 'Are you sure you want to remove this set?'
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          const filteredSets = exerciseSets.filter((set) => set.setNumber !== exerciseId)
          const updatedSets = filteredSets.map((set, i) => {
            return {
              ...set,
              setNumber: i + 1
            }
          })
          setExerciseSets(updatedSets)
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
    const newSetNumber = exerciseSets.length + 1
    const newSet = {
      setNumber: newSetNumber,
      reps: '0',
      rpe: '0',
      weight: '0',
      isCompletedSet: false,
      id: newSetNumber
    }
    setExerciseSets([...exerciseSets, newSet])
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
    const updatedSets = exerciseSets.map((set) => {
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
    setExerciseSets(updatedSets)
  }

  const handleHeaderSetChange = () => {
    for (const currentExercise of exerciseSets) {
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

  return (
    <Card cardHeight={cardHeight} style={{ minWidth: 353 }} borderRadius>
      <Pressable onPress={toggleCollapse}>
        <FlexContainer direction={LAYOUT.FLEX_ROW}>
          <Image src={exerciseImage} 
            height={50} 
            width={50} 
            borderRadius={25} 
            marginTop={8} 
          />
          <FlexContainer direction={LAYOUT.FLEX_COLUMN}>
            <FlexContainer>
              <Text style={styles.exercise_title}>{exerciseTitle}</Text>
            </FlexContainer>
            <FlexContainer
              style={styles.exercise_header}
              direction={LAYOUT.FLEX_ROW}
              marginLeft={11}
            >
              <ExerciseHeader
                rpe={exerciseSetHeader.rpe} 
                reps={exerciseSetHeader.reps} 
                setNumber={exerciseSetHeader.setNumber} 
                weight={exerciseSetHeader.weight}
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
              {exerciseSets.map((exerciseSet) => (
                <Set
                  onLongPress={() => onPress(exerciseSet.setNumber)}
                  key={exerciseSet.setNumber}
                  setNumber={exerciseSet.setNumber}
                  reps={exerciseSet.reps}
                  rpe={exerciseSet.rpe}
                  weight={exerciseSet.weight}
                  isCompletedSet={exerciseSet.isCompletedSet}
                  onRepsChange={(value) => handleSetChange(exerciseSet.setNumber, 'reps', value)}
                  onRpeChange={(value) => handleSetChange(exerciseSet.setNumber, 'rpe', value)}
                  onWeightChange={(value) => handleSetChange(exerciseSet.setNumber, 'weight', value)}
                  onSetCompletionChange={() => handleSetChange(exerciseSet.setNumber, 'isCompletedSet')}
                />
              ))}
            </FlexContainer>
          </View>
        </Animated.View>
      )}
      {!isCollapsed && (
        <Button
          onPress={addSet}
          textStyle={styles.add_set_button_text}
          style={styles.add_set_button}
          title="Add Set"
        />
      )}
    </Card>
  )
}

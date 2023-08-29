import * as React from 'react'
import { Text, Animated, Easing, View, Pressable } from 'react-native'
import { ExerciseInfo } from './components/exerciseinfo/ExerciseInfo'
import { Card, Image, Button } from '../../components'
import { LAYOUT } from '../../constants'
import { FlexContainer } from '../../layout'
import styles from './WorkoutExercise.styles'
import { Set } from './components/set/Set'

export function WorkoutExercise({
  exerciseTitle,
  exerciseImage,
  sets,
  reps,
  weight,
  rpe
}) {

  const [isCollapsed, setIsCollapsed] = React.useState(true)
  const [animation] = React.useState(new Animated.Value(0))
  const [expandedContentHeight, setExpandedContentHeight] = React.useState(220)
  const [exerciseSetNumber, setExerciseSetNumber] = React.useState(1)
  const [exerciseSets, setExerciseSet] = React.useState([
    <Set
      id={Math.random}
      setNumber={exerciseSetNumber}
      reps={10}
      rpe={8}
      weight={200}
    />
  ])

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
    Animated.timing(animation, {
      toValue: isCollapsed ? 1 : 0,
      duration: 150,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start()
  }

  //Going to want to fetch the user exercise info for sets and then apply that to the DefaultSet

  const addContent = () => {
    const newSetNumber = exerciseSetNumber + 1
    setExerciseSetNumber(newSetNumber)
    setExerciseSet([...exerciseSets,
      <Set
        id={Math.random}
        setNumber={newSetNumber}
        reps={10}
        rpe={8}
        weight={200}
      />
    ])
  }

  const expandCardHeight = () => {
    const newSetHeight = 30
    setExpandedContentHeight(expandedContentHeight + newSetHeight)
  }

  const additionalContentOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  })

  const cardHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [92, expandedContentHeight],
  });

  const SUBTITLE = {
    SETS: 'set',
    REPS: 'reps',
    WEIGHT: 'lbs', //TODO: convert this to something that can render lbs or kgs based on region.
    RPE: 'rpe'
  }
  return (
    <Card cardHeight={cardHeight} style={{ minWidth: 353 }} borderRadius>
      <Pressable onPress={toggleCollapse}>
        <FlexContainer direction={LAYOUT.FLEX_ROW}>
          <Image
            src={exerciseImage}
            height={50}
            width={50}
            borderRadius={25} marginTop={8} />
          <FlexContainer direction={LAYOUT.FLEX_COLUMN}>
            <FlexContainer>
              <Text style={styles.exercise_title}>{exerciseTitle}</Text>
            </FlexContainer>
            <FlexContainer style={{ justifyContent: 'space-between', width: 234, marginBottom: 2 }} direction={LAYOUT.FLEX_ROW} marginLeft={11}>
              <ExerciseInfo value={sets} subTitle={SUBTITLE.SETS} />
              <ExerciseInfo value={reps} subTitle={SUBTITLE.REPS} />
              <ExerciseInfo value={rpe} subTitle={SUBTITLE.RPE} />
              <ExerciseInfo value={weight} subTitle={SUBTITLE.WEIGHT} />
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </Pressable>
      {!isCollapsed && (
        <Animated.View
          style={{
            opacity: additionalContentOpacity,
          }}
        >
          <View style={{ marginTop: 18, marginLeft: 6, marginRight: 87 }}>
            <FlexContainer style={{ justifyContent: 'space-between' }} direction='row'>
              <Text style={styles.sets_header}>set</Text>
              <Text style={styles.sets_header}>reps</Text>
              <Text style={styles.sets_header}>rpe</Text>
              <Text style={styles.sets_header}>lbs</Text>
            </FlexContainer>
            <FlexContainer direction="column">
              {exerciseSets}
            </FlexContainer>
          </View>
        </Animated.View>

      )
      }
      {!isCollapsed &&
        <Button
          onPress={() => { addContent(); expandCardHeight() }}
          textStyle={{ lineHeight: 36 }}
          style={{ position: 'absolute', bottom: 0, width: '100%', height: 36, borderRadius: 10, marginLeft: 12, marginBottom: 24 }}
          title='Add Set'
        />
      }
    </Card>
  )
}
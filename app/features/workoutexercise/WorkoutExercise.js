
import * as React from 'react'
import { Text, Animated, Easing, View } from 'react-native'
import { ExerciseInfo } from './components/exerciseinfo/ExerciseInfo'
import { Card, Image, Button, StatusIndicator } from '../../components'
import { LAYOUT, COLORS } from '../../constants'
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
  const [additionalContentHeight, setAdditionalContentHeight] = React.useState(92)
  const [expandedContentHeight, setExpandedContentHeight] = React.useState(220)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
    Animated.timing(animation, {
      toValue: isCollapsed ? 1 : 0,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start()
  }

  const addContent = () => {
    const newSetHeight = 35
    setAdditionalContentHeight(additionalContentHeight + newSetHeight)
  }

  const expandCardHeight = () => {
    const newSetHeight = 35
    setExpandedContentHeight(expandedContentHeight + newSetHeight)
  }


  const additionalContentOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  })


  const buttonBottom = additionalContentHeight > 0 ?  0 - 54 : 0

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
    <Card cardHeight={cardHeight} style={{minWidth: 353}} onPress={toggleCollapse} borderRadius>
      <FlexContainer direction={LAYOUT.FLEX_ROW}>
        <Image
          src={exerciseImage}
          height={50}
          width={50}
          borderRadius={25} marginTop={8}/>
        <FlexContainer direction={LAYOUT.FLEX_COLUMN}>
          <FlexContainer>
            <Text style={styles.exercise_title}>{ exerciseTitle }</Text>
          </FlexContainer>
          <FlexContainer style={{justifyContent: 'space-between', width: 234, marginBottom: 2}} direction={LAYOUT.FLEX_ROW} marginLeft={11}>
              <ExerciseInfo value={sets} subTitle={SUBTITLE.SETS} />
              <ExerciseInfo value={reps} subTitle={SUBTITLE.REPS} />
              <ExerciseInfo value={rpe} subTitle={SUBTITLE.RPE} />
              <ExerciseInfo value={weight} subTitle={SUBTITLE.WEIGHT} />
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      {!isCollapsed? (
        <Animated.View
        style={{
          opacity: additionalContentOpacity,
          height: additionalContentHeight
        }}
        >
        <View style={{marginTop: 18, marginLeft: 6, marginRight: 87}}>
          <FlexContainer style={{justifyContent: 'space-between'}} direction='row'>
            <Text style={styles.sets_header}>set</Text>
            <Text style={styles.sets_header}>reps</Text>
            <Text style={styles.sets_header}>rpe</Text>
            <Text style={styles.sets_header}>lbs</Text>
          </FlexContainer>
          <FlexContainer direction="column">
            <Set
              setNumber={1}
              reps={10}
              rpe={8}
              weight={200}
            />
          </FlexContainer>
        </View>
        <Button 
          onPress={() => {addContent(); expandCardHeight()}} 
          textStyle={{lineHeight: 36}} 
          style={{position: 'absolute',width: '100%', bottom: buttonBottom, marginLeft: 2, marginRight: 2, height: 36, marginBottom: 24, borderRadius: 10}} 
          title='Add Set'
        />
      </Animated.View> 

      ) : null
    }
    </Card>
  )
}

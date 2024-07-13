import createStyles from './WorkoutScreen.styles'
import React, { useRef, useEffect } from 'react'
import { View, Animated, SafeAreaView } from 'react-native'
import { ScrollContent } from '@layout'
import { CompletedWorkout, StartNewWorkout, CompletedWorkoutLoading } from '@features'
import { useGetCompletedWorkouts } from '@lib/workouts/hooks'

export const WorkoutScreenRoute = 'WorkoutScreenRoute'

export const HEADER_MAX_HEIGHT = 80
export const HEADER_MIN_HEIGHT = 55
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT

const data4 = {
  userName: 'jamesftw',
  workoutTime: 'Yesterday at 11:10 am',
  location: 'Oakland, Ca',
  workoutTitle: 'Sunday Morning Workout',
  totalVolume: '200 lbs',
  time: '0h 40m',
  calsBurned: '120 cal',
  primaryMusleGroup: 'Back',
}

export function WorkoutScreen({ navigation }) {
  const styles = createStyles(HEADER_MAX_HEIGHT)
  const { data, isLoading } = useGetCompletedWorkouts()
  const scrollY = useRef(new Animated.Value(0)).current
  const fadeAnim = useRef(new Animated.Value(0)).current

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  })

  const headerTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  })

  const handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y
    scrollY.setValue(offsetY)
  }

  // Use data from the hook if available, otherwise use the fallback data
  const workoutsToDisplay = data?.completedWorkoutsData || [data4]

  useEffect(() => {
    if (!isLoading) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start()
    }
  }, [isLoading])

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          {
            height: headerHeight,
            transform: [{ translateY: headerTranslate }],
          },
        ]}>
        <StartNewWorkout navigation={navigation} />
      </Animated.View>
      <ScrollContent
        showsVerticalScrollIndicator={false}
        style={styles.scrollContent}
        scrollEventThrottle={16}
        onScroll={handleScroll}>
        <View style={styles.scrollContentContainer}>
          {isLoading ? (
            <>
              <CompletedWorkoutLoading />
              <CompletedWorkoutLoading />
              <CompletedWorkoutLoading />
            </>
          ) : (
            <Animated.View style={{ opacity: fadeAnim }}>
              {workoutsToDisplay.map((workout, index) => (
                <CompletedWorkout key={index} data={data4} />
              ))}
            </Animated.View>
          )}
        </View>
      </ScrollContent>
    </SafeAreaView>
  )
}

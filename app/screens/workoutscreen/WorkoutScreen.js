import createStyles from './WorkoutScreen.styles'
import React, { useRef, useEffect, useCallback } from 'react'
import { View, Animated, SafeAreaView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { ScrollContent } from '@layout'
import { CompletedWorkout, StartNewWorkout, CompletedWorkoutLoading } from '@features'
import { useGetCompletedWorkouts } from '@lib/workouts/hooks'
import { useFetchUserProfile } from '@lib/users/profile/hooks'
import { formatTimeForCompletedWorkout, formatWorkoutTime } from '@app/utils/dateTimeUtil'

export const WorkoutScreenRoute = 'WorkoutScreenRoute'

export const HEADER_MAX_HEIGHT = 80
export const HEADER_MIN_HEIGHT = 55
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT

export function WorkoutScreen({ navigation }) {
  const { data, isLoading, refetch } = useGetCompletedWorkouts()
  const { data: userProfileData, isLoading: userProfileDataLoading } = useFetchUserProfile()

  const styles = createStyles(HEADER_MAX_HEIGHT)
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

  const workoutsToDisplay = data?.completedWorkoutsData

  useFocusEffect(
    useCallback(() => {
      refetch()
    }, [refetch]),
  )

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
          {isLoading || userProfileDataLoading ? (
            <>
              <CompletedWorkoutLoading />
              <CompletedWorkoutLoading />
              <CompletedWorkoutLoading />
            </>
          ) : (
            <Animated.View style={{ opacity: fadeAnim }}>
              {workoutsToDisplay.map((workout, index) => {
                const workoutData = {
                  userName: userProfileData.userName,
                  workoutTime: formatWorkoutTime(workout.updatedAt),
                  location: 'Oakland, Ca',
                  workoutTitle: workout.workoutTitle,
                  totalVolume: `${workout.totalVolume} lbs`,
                  time: formatTimeForCompletedWorkout(workout.duration),
                  totalSets: workout.totalSets,
                  primaryMusleGroup: workout.primaryMuscleGroups[0],
                }

                return <CompletedWorkout key={index} data={workoutData} />
              })}
            </Animated.View>
          )}
        </View>
      </ScrollContent>
    </SafeAreaView>
  )
}

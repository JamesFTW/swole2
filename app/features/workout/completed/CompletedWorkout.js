import React, { useEffect, useRef } from 'react'
import { View, Text, Animated } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { FlexContainer } from '@layout'
import { ProfilePhoto } from '@features'
import { LAYOUT } from '@constants'
import styles from './CompletedWorkout.styles'
import { COLORS } from '@constants'

const LoadingPlaceholder = ({ width, height, style }) => {
  const translateX = useRef(new Animated.Value(-width)).current

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: width,
        duration: 1000,
        useNativeDriver: true,
      }),
    ).start()
  }, [width])

  return (
    <View
      style={[
        {
          width,
          height,
          backgroundColor: COLORS.BACKGROUND_COLOR,
          borderRadius: 4,
          overflow: 'hidden',
        },
        style,
      ]}>
      <Animated.View
        style={{
          width: '100%',
          height: '100%',
          transform: [{ translateX }],
        }}>
        <LinearGradient
          colors={['#E4E5EA', '#F4F5FA', '#E4E5EA']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ width: '200%', height: '100%' }}
        />
      </Animated.View>
    </View>
  )
}

const WorkoutDataLoading = () => {
  return (
    <FlexContainer style={styles.workoutDataContainer} direction="column">
      <LoadingPlaceholder width={80} height={16} style={{ marginBottom: 4 }} />
      <LoadingPlaceholder width={60} height={20} />
    </FlexContainer>
  )
}

const WorkoutData = ({ title, data }) => {
  return (
    <FlexContainer style={styles.workoutDataContainer} direction="column">
      <Text style={styles.workoutDataTitle}>{title}</Text>
      <Text style={styles.workoutDataInfo}>{data}</Text>
    </FlexContainer>
  )
}

export const CompletedWorkoutLoading = () => {
  return (
    <View style={styles.container}>
      <FlexContainer direction="column">
        <FlexContainer style={styles.userHeaderContainer} direction="row">
          <LoadingPlaceholder
            width={LAYOUT.SPACING_XS_16 * 2 + LAYOUT.SPACING_NUDGE_S * 2}
            height={LAYOUT.SPACING_XS_16 * 2 + LAYOUT.SPACING_NUDGE_S * 2}
            style={styles.profilePhoto}
          />
          <FlexContainer direction="column" style={{ marginLeft: 10 }}>
            <LoadingPlaceholder width={120} height={18} style={{ marginBottom: 4 }} />
            <LoadingPlaceholder width={150} height={14} />
          </FlexContainer>
        </FlexContainer>
        <LoadingPlaceholder width={200} height={24} style={{ marginVertical: 10 }} />
        <FlexContainer style={styles.workoutDataRow} direction="row">
          <WorkoutDataLoading />
          <View style={styles.verticalDivider} />
          <WorkoutDataLoading />
        </FlexContainer>
        <View style={styles.divider}></View>
        <FlexContainer style={styles.workoutDataRow} direction="row">
          <WorkoutDataLoading />
          <View style={styles.verticalDivider} />
          <WorkoutDataLoading />
        </FlexContainer>
      </FlexContainer>
    </View>
  )
}

export const CompletedWorkout = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlexContainer direction="column">
        <FlexContainer style={styles.userHeaderContainer} direction="row">
          <ProfilePhoto borderRadius={LAYOUT.SPACING_XS_16 + LAYOUT.SPACING_NUDGE_S} style={styles.profilePhoto} />
          <FlexContainer direction="column">
            <Text style={styles.userName}>{data.userName}</Text>
            <Text style={styles.workoutDataLocation}>
              {data.workoutTime} {data.location}
            </Text>
          </FlexContainer>
        </FlexContainer>
        <Text style={styles.workoutTitle}>{data.workoutTitle}</Text>
        <FlexContainer style={styles.workoutDataRow} direction="row">
          <WorkoutData title="Total Volume" data={data.totalVolume} />
          <View style={styles.verticalDivider} />
          <WorkoutData title="Workout Time" data={data.time} />
        </FlexContainer>
        <View style={styles.divider}></View>
        <FlexContainer style={styles.workoutDataRow} direction="row">
          <WorkoutData title="Calories" data={data.calsBurned} />
          <View style={styles.verticalDivider} />
          <WorkoutData title="Primary Muscle" data={data.primaryMusleGroup} />
        </FlexContainer>
      </FlexContainer>
    </View>
  )
}

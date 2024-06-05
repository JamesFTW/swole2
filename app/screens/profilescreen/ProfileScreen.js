import React, { useCallback } from 'react'
import { View, Text } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { Button } from '@components'
import { WeekAtGlance, ProfilePhoto, WeeklySnapshot } from '@features'
import { ScrollContent, FlexContainer } from '@layout'
import { useGetUserProfile, useFetchUserProfile } from '@lib/users/profile/hooks'
import { Pencil } from '@assets/icons'
import { ProfileSettingsStackRoute } from './profilesettingsscreen'
import styles from './ProfileScreen.styles'

export const ProfileScreenRoute = 'ProfileScreenRoute'

const weeklyStatus = {
  Monday: { date: '2023-06-05', workoutCompleted: true, workoutId: 1 },
  Tuesday: { date: '2023-06-06', workoutCompleted: true, workoutId: 2 },
  Wednesday: { date: '2023-06-07', workoutCompleted: false, workoutId: 3 },
  Thursday: { date: '2023-06-08', workoutCompleted: true, workoutId: 4 },
  Friday: { date: '2023-06-09', workoutCompleted: false, workoutId: 5 },
  Saturday: { date: '2023-06-10', workoutCompleted: false, workoutId: 6 },
  Sunday: { date: '2023-06-11', workoutCompleted: false, workoutId: 7 },
}

export function ProfileScreen({ navigation }) {
  const { data, isSuccess } = useGetUserProfile()
  const { refetch } = useFetchUserProfile()

  useFocusEffect(
    useCallback(() => {
      refetch()
    }, []),
  )

  const handleRefresh = () => {
    refetch()
  }

  const handleNavigation = () => {
    navigation.navigate(ProfileSettingsStackRoute)
  }

  return (
    <ScrollContent refreshingFunc={handleRefresh}>
      <View style={styles.profile_image_container}>
        <ProfilePhoto style={styles.profile_image} />
      </View>
      <FlexContainer direction="row">
        <FlexContainer direction="column" style={styles.profile_name_location_container}>
          <Text style={styles.profile_name}>{isSuccess ? data?.userName : null}</Text>
        </FlexContainer>
        <Button
          outline
          onPress={handleNavigation}
          icon={<Pencil style={styles.pencil_icon} />}
          textStyle={styles.edit_button_text}
          style={styles.edit_button}
          title="EDIT PROFILE"
        />
      </FlexContainer>
      <Text style={styles.bio}>{isSuccess ? data?.bio : null}</Text>
      <WeekAtGlance weeklyStatus={weeklyStatus} />
      <WeeklySnapshot />
    </ScrollContent>
  )
}

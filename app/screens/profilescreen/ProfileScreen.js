import React, { useContext } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { Image, Button } from '@components'
import { WeekAtGlance } from '@features'
import { ScrollContent, FlexContainer } from '@layout'
import { useGetUserProfile } from '@lib/users/hooks'
import { Location, Pencil } from '@assets/icons'
import { ProfileSettingsStackRoute } from './profilesettingsscreen'
import styles from './ProfileScreen.styles'
import { ProfilePhoto } from '@app/features'

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

export function ProfileScreen({ navigation, hasBio }) {
  const { data, isSuccess, refetch } = useGetUserProfile()

  /**
   * Going to need to get location and bio from data.userInfo eventually
   */

  return (
    <ScrollContent refreshingFunc={refetch}>
      <View style={styles.profile_image_container}>
        <ProfilePhoto style={styles.profile_image} />
      </View>
      <FlexContainer direction="row">
        <FlexContainer
          direction="column"
          marginTop={21}
          style={styles.profile_name_location_container}>
          {isSuccess ? (
            <Text style={styles.profile_name}>{data.userInfo.userName}</Text>
          ) : null}
          <FlexContainer
            direction="row"
            marginBottom={14}
            marginTop={5}
            marginLeft={16}>
            <Location />
            <Text style={styles.profile_location}>San Francisco, CA</Text>
          </FlexContainer>
        </FlexContainer>
        <Button
          outline
          onPress={() => {
            navigation.navigate(ProfileSettingsStackRoute)
          }}
          icon={<Pencil style={styles.pencil_icon} />}
          textStyle={styles.edit_button_text}
          style={styles.edit_button}
          title="EDIT PROFILE"></Button>
      </FlexContainer>
      <Text style={styles.bio}>
        “Those who think they have not time for bodily exercise will sooner or
        later take Ls”.
      </Text>
      <View>
        <WeekAtGlance weeklyStatus={weeklyStatus} />
      </View>
    </ScrollContent>
  )
}

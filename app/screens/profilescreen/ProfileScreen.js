import React from 'react'
import { View, Text } from 'react-native'
import { Image, Button } from '../../components'
import { ScrollContent, FlexContainer } from '../../layout'
import { WeekAtGlance } from '../../features'
import { Location, Pencil } from '../../assets/icons'
import { UserSettingsScreenRoute } from './usersettingsscreen/UserSettingsScreen'
import { useGetUserProfile } from '../../lib/users/hooks'
import SplashScreenBackground from '../../assets/imgs/splash_screen.png'
import styles from './ProfileScreen.styles'

export const ProfileScreenRoute = "ProfileScreenRoute"

const weeklyStatus = {
  Monday: { date: '2023-06-05', workoutCompleted: true, workoutId: 1 },
  Tuesday: { date: '2023-06-06', workoutCompleted: true, workoutId: 2 },
  Wednesday: { date: '2023-06-07', workoutCompleted: false, workoutId: 3 },
  Thursday: { date: '2023-06-08', workoutCompleted: true, workoutId: 4 },
  Friday: { date: '2023-06-09', workoutCompleted: false, workoutId: 5 },
  Saturday: { date: '2023-06-10', workoutCompleted: false, workoutId: 6 },
  Sunday: { date: '2023-06-11', workoutCompleted: false, workoutId: 7 }
};

export function ProfileScreen({navigation, hasBio}) {
  const { data, isSuccess } = useGetUserProfile()
  /**
   * Going to need to get location and bio from data.userInfo eventually
   */

  return (
    <ScrollContent>
      <View>
        <Image style={styles.profile_image} src={SplashScreenBackground}></Image>
      </View>
      <FlexContainer direction='row'>
        <FlexContainer direction='column' marginTop={21} style={styles.profile_name_location_container}>
          {isSuccess 
            ? <Text style={styles.profile_name}>{data.userInfo.userName}</Text>
            : null
          }
          <FlexContainer direction='row' marginBottom={14} marginTop={5} marginLeft={16} >
            <Location/>
            <Text style={styles.profile_location}>San Francisco, CA</Text>
          </FlexContainer>
        </FlexContainer>
        <Button
          outline 
          onPress={() => {
            navigation.navigate(UserSettingsScreenRoute)
          }}
          icon={<Pencil style={styles.pencil_icon}/>} 
          textStyle={styles.edit_button_text} 
          style={styles.edit_button} 
          title="EDIT PROFILE">
        </Button>
      </FlexContainer>
      <Text style={styles.bio}>“Those who think they have not time for bodily exercise will sooner or later take Ls”.</Text>
      <View>
        <WeekAtGlance weeklyStatus={weeklyStatus} />
      </View>
    </ScrollContent>
  )
}


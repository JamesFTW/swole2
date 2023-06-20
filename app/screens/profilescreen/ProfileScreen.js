import React from 'react'
import { View, Text } from 'react-native'
import { Image } from '../../components'
import { ScrollContent, FlexContainer } from '../../layout'
import SplashScreenBackground from '../../assets/imgs/splash_screen.png'
import { WeekAtGlance } from '../../features'
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

export function ProfileScreen({navigation}) {
  return (
    <ScrollContent>
      <View>
        <Image style={styles.profile_image} src={SplashScreenBackground}></Image>
      </View>
      <FlexContainer direction='column' style={styles.profile_name_location_container}>
        <Text style={styles.profile_name}>James Andrews</Text>
        <Text >San Francisco, Ca</Text>
      </FlexContainer>
      <View>
        <WeekAtGlance weeklyStatus={weeklyStatus} />
      </View>
    </ScrollContent>
  )
}


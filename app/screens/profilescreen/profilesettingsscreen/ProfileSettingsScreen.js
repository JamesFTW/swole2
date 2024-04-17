import * as React from 'react'
import { SafeAreaView, Pressable } from 'react-native'
import { Header } from '../../../components'
import { ScrollContent } from '../../../layout'
import { ProfilePhoto } from '../../../features/user'
import { TextButton } from '../../../components'
import { ProfilePhotoManagerRoute } from '../../../features/user'
import styles from './ProfileSettingsScreen.styles'

export const ProfileSettingsScreenRoute = 'ProfileSettingsScreenRoute'

export function ProfileSettingsScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollContent>
        <Pressable
          onPress={() => {
            navigation.navigate(ProfilePhotoManagerRoute)
          }}>
          <ProfilePhoto style={styles.profilePhoto} />
        </Pressable>
        <TextButton
          textStyle={styles.profilePhotoEditButtonText}
          style={styles.profilePhotoEditButton}
          children="Edit picture"
          onPress={() => {
            navigation.navigate(ProfilePhotoManagerRoute)
          }}
        />
      </ScrollContent>
    </SafeAreaView>
  )
}

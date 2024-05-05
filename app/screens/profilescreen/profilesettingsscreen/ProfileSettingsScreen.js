import * as React from 'react'
import { SafeAreaView, Pressable } from 'react-native'
import { Header, TextButton } from '@components'
import { ScrollContent } from '@layout'
import { LAYOUT } from '@constants'
import { ProfilePhoto, ProfilePhotoManagerRoute, ProfileSettingsForm } from '@features/user'
import styles from './ProfileSettingsScreen.styles'

export const ProfileSettingsScreenRoute = 'ProfileSettingsScreenRoute'

export function ProfileSettingsScreen({ navigation }) {
  const handleNavigation = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView>
      <Header title="Edit Profile" onPress={handleNavigation} />
      <ScrollContent style={styles.scrollContentContainer}>
        <Pressable
          onPress={() => {
            navigation.navigate(ProfilePhotoManagerRoute)
          }}>
          <ProfilePhoto borderRadius={LAYOUT.SPACING_MD_40} style={styles.profilePhoto} />
        </Pressable>
        <TextButton
          textStyle={styles.profilePhotoEditButtonText}
          style={styles.profilePhotoEditButton}
          children="Edit picture"
          onPress={() => {
            navigation.navigate(ProfilePhotoManagerRoute)
          }}
        />
        <ProfileSettingsForm navigation={navigation} />
      </ScrollContent>
    </SafeAreaView>
  )
}

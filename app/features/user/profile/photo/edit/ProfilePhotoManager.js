import React from 'react'
import { Text, View } from 'react-native'
import { ProfilePhoto } from '../ProfilePhoto'
import { COLORS, LAYOUT } from '../../../../../constants'
import { Library, CameraIcon, TrashCan } from '../../../../../assets/icons'
import styles from './ProfilePhotoManager.styles'

export const ProfilePhotoManagerRoute = 'ProfilePhotoManagerRoute'

export const profileManageDrawerConfig = {
  presentation: 'modal',
  contentStyle: {
    marginTop: '122%',
    borderTopLeftRadius: LAYOUT.SPACING_S_20,
    borderTopRightRadius: LAYOUT.SPACING_S_20,
    paddingLeft: LAYOUT.SPACING_S_24 + LAYOUT.SPACING_NUDGE_XS,
    paddingRight: LAYOUT.SPACING_S_24 + LAYOUT.SPACING_NUDGE_XS,
    backgroundColor: COLORS.WHITE,
  },
}

export function ProfilePhotoManager({ route, navigation }) {
  return (
    <View style={styles.profilePhotoEditContentContainer}>
      <View style={styles.profilePhotoEditLine} />
      <ProfilePhoto style={styles.profilePhotoEditProfilePhoto} />
      <View style={styles.profilePhotoEditHeaderLine} />
      <View style={styles.profilePhotoEditPhotoEditContainer}>
        <View style={styles.profilePhotoEditButton}>
          <Library />
          <Text style={styles.profilePhotoEditButtonText}>
            Choose from library
          </Text>
        </View>
        <View style={styles.profilePhotoEditButton}>
          <CameraIcon />
          <Text style={styles.profilePhotoEditButtonText}>Take photo</Text>
        </View>
        <View style={styles.profilePhotoEditButton}>
          <TrashCan />
          <Text
            style={[
              styles.profilePhotoEditButtonText,
              { color: COLORS.ALERT_COLOR },
            ]}>
            Remove current picture
          </Text>
        </View>
      </View>
    </View>
  )
}

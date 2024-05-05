import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { CameraRoll } from '@react-native-camera-roll/camera-roll'
import { COLORS, LAYOUT } from '@constants'
import { Library, CameraIcon, TrashCan } from '@assets/icons'
import { ProfilePhoto } from '../ProfilePhoto'
import styles from './ProfilePhotoManager.styles'

import { ProfileImageSelectScreenRoute } from '@screens/profilescreen/profilesettingsscreen/ProfileImageSelectScreen'

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
  const [photos, setPhotos] = React.useState([])

  const handleGetPhotos = React.useCallback(async () => {
    try {
      const r = await CameraRoll.getPhotos({
        first: 20,
        assetType: 'Photos',
      })
      setPhotos(r.edges)
    } catch (err) {
      console.log(err)
    }
  }, [])

  React.useEffect(() => {
    if (photos.length === 0) return
    navigation.navigate(ProfileImageSelectScreenRoute, {
      photos,
      firstPhoto: photos[0].node.image.uri,
    })
  }, [photos])

  return (
    <View style={styles.profilePhotoEditContentContainer}>
      <View style={styles.profilePhotoEditLine} />
      <ProfilePhoto borderRadius={LAYOUT.SPACING_S_20} style={styles.profilePhotoEditProfilePhoto} />
      <View style={styles.profilePhotoEditHeaderLine} />
      <View style={styles.profilePhotoEditPhotoEditContainer}>
        <Pressable onPress={handleGetPhotos}>
          <View style={styles.profilePhotoEditButton}>
            <Library />
            <Text style={styles.profilePhotoEditButtonText}>Choose from library</Text>
          </View>
        </Pressable>
        <View style={styles.profilePhotoEditButton}>
          <CameraIcon />
          <Text style={styles.profilePhotoEditButtonText}>Take photo</Text>
        </View>
        <View style={styles.profilePhotoEditButton}>
          <TrashCan />
          <Text style={[styles.profilePhotoEditButtonText, { color: COLORS.ALERT_COLOR }]}>Remove current picture</Text>
        </View>
      </View>
    </View>
  )
}

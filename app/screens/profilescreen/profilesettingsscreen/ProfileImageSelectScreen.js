import * as React from 'react'
import {
  SafeAreaView,
  Pressable,
  View,
  ImageBackground,
  FlatList,
} from 'react-native'
import { Header, Image, CircleOverlay } from '../../../components'
import { CameraRoll } from '@react-native-camera-roll/camera-roll'
import { useUploadProfilePhoto } from '../../../lib/users/userprofile/hooks'
import styles from './ProfileImageSelectScreen.styles.js'

export const ProfileImageSelectScreenRoute = 'ProfileImageSelectScreenRoute'
export const ProfileImageSelectScreenOptions = {
  presentation: 'fullScreenModal',
}

export function ProfileImageSelectScreen({ route, navigation }) {
  const { photos } = route.params
  const [selectedPhotoUri, setSelectedPhotoUri] = React.useState(null)
  const [filePath, setFilePath] = React.useState(null)
  const { isSuccess, mutate } = useUploadProfilePhoto(filePath)

  React.useEffect(() => {
    if (selectedPhotoUri === null) {
      getFilePath(photos[0].node.image.uri)
    }
  }, [])

  React.useEffect(() => {
    if (isSuccess) {
      navigation.pop(2)
    }
  }, [isSuccess])

  const getFilePath = async uri => {
    try {
      setSelectedPhotoUri(uri)
      const fileData = await CameraRoll.iosGetImageDataById(uri, {
        convertHeicImages: true,
      })
      if (!fileData?.node?.image?.filepath) return undefined

      const uploadPath = fileData.node.image.filepath

      setFilePath(uploadPath)
    } catch (error) {
      console.error('Error getting file path:', error)
    }
  }

  const handleUploadImage = () => {
    if (filePath) {
      mutate(filePath)
    } else {
      getFilePath(selectedPhotoUri)
      mutate(filePath)
    }
  }

  return (
    <SafeAreaView>
      <Header
        secondaryAction={() => handleUploadImage()}
        secondaryActionText="Done"
        title="Library"
        onPress={() => navigation.pop(2)}
      />
      <ImageBackground
        source={{ uri: selectedPhotoUri }}
        style={styles.selectPhotoImage}>
        <CircleOverlay />
      </ImageBackground>
      <View style={styles.selectPhotoHeader} />
      <FlatList
        data={photos}
        numColumns={4}
        style={styles.selectPhotoFlatListContainer}
        renderItem={({ item }) => (
          <Pressable onPress={() => getFilePath(item.node.image.uri)}>
            <Image
              style={[
                styles.selectPhotoImages,
                { opacity: selectedPhotoUri === item.node.image.uri ? 0.5 : 1 },
              ]}
              src={item.node.image.uri}
            />
          </Pressable>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  )
}

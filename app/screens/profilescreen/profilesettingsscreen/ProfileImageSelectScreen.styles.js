import { StyleSheet } from 'react-native'
import { COLORS, LAYOUT } from '@constants'

const styles = StyleSheet.create({
  profilePhotoPreview: {
    height: 390,
    width: '100%',
    backgroundColor: COLORS.BLACK,
    opacity: 0.3,
  },
  profilePhotoPreviewOverlay: {
    position: LAYOUT.POSITION_ABSOLUTE,
    height: 390,
    width: '100%',
    backgroundColor: COLORS.TRANSPARENT,
    borderRadius: 195,
    opacity: 1,
  },
  selectPhotoImage: {
    height: 390,
    width: '100%',
  },
  selectPhotoHeader: {
    height: 58,
    width: '100%',
  },
  selectPhotoFlatListContainer: {
    height: '40%',
    width: '100%',
  },
  selectPhotoImages: {
    width: 100,
    height: 100,
  },
})

export default styles

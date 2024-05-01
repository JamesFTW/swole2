import { StyleSheet } from 'react-native'
import { COLORS, FONTS, LAYOUT } from '@constants'

const styles = StyleSheet.create({
  profilePhoto: {
    alignSelf: LAYOUT.ALIGN_CENTER,
    marginTop: LAYOUT.SPACING_S_20,
    height: LAYOUT.SPACING_XL_80,
    width: LAYOUT.SPACING_XL_80,
    borderRadius: LAYOUT.SPACING_MD_40,
    overflow: LAYOUT.OVERFLOW_HIDDEN,
  },
  profilePhotoEditButton: {
    alignSelf: LAYOUT.ALIGN_CENTER,
    marginTop: LAYOUT.SPACING_XS_16,
  },
  profilePhotoEditButtonText: {
    color: COLORS.SUCCESS_BLUE,
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_14,
  },
})

export default styles

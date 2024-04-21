import { StyleSheet } from 'react-native'
import { LAYOUT, FONTS, COLORS } from '../../../../../constants'

const styles = StyleSheet.create({
  profilePhotoEditButton: {
    alignSelf: LAYOUT.ALIGN_CENTER,
    marginTop: LAYOUT.SPACING_XS_16,
  },
  profilePhotoEditButtonText: {
    color: COLORS.SUCCESS_BLUE,
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_14,
  },
  profilePhotoEditContentContainer: {
    paddingTop: LAYOUT.SPACING_XS_16,
  },
  profilePhotoEditLine: {
    width: LAYOUT.SPACING_MD_36,
    height: LAYOUT.SPACING_XS_4,
    backgroundColor: COLORS.BLACK,
    alignSelf: LAYOUT.ALIGN_CENTER,
    backgroundColor: COLORS.LIGHT_GRAY,
    borderRadius: LAYOUT.SPACING_NUDGE_S,
  },
  profilePhotoEditProfilePhoto: {
    alignSelf: LAYOUT.ALIGN_CENTER,
    marginTop: LAYOUT.SPACING_XS_12,
    height: LAYOUT.SPACING_MD_40,
    width: LAYOUT.SPACING_MD_40,
    borderRadius: LAYOUT.SPACING_S_20,
  },
  profilePhotoEditPhotoEditContainer: {
    width: '100%',
    marginTop: LAYOUT.SPACING_S_32,
  },
  profilePhotoEditButton: {
    flexDirection: LAYOUT.FLEX_ROW,
    marginBottom: LAYOUT.SPACING_S_32,
  },
  profilePhotoEditButtonText: {
    marginLeft: LAYOUT.SPACING_S_20,
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_16,
    color: COLORS.PRIMARY_COLOR,
    letterSpacing: FONTS.SPACING_S,
  },
  profilePhotoEditHeaderLine: {
    width: '100%',
    height: LAYOUT.SPACING_NUDGE_S,
    backgroundColor: COLORS.CARD_BOARDER_COLOR,
    alignSelf: LAYOUT.ALIGN_CENTER,
    marginTop: LAYOUT.SPACING_XS_12,
  },
})

export default styles

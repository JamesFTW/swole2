import { StyleSheet } from 'react-native'
import { COLORS, FONTS, LAYOUT } from '../../../constants'

const styles = StyleSheet.create({
  profilePhoto: {
    alignSelf: LAYOUT.ALIGN_CENTER,
    marginTop: LAYOUT.SPACING_S_20,
    height: LAYOUT.SPACING_XL_80,
    width: LAYOUT.SPACING_XL_80,
    borderRadius: LAYOUT.SPACING_MD_40,
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
  drawerOverlay: {
    position: LAYOUT.POSITION_ABSOLUTE,
    backgroundColor: COLORS.BLACK,
    height: '100%',
    width: '100%',
    opacity: 0.6,
  },
  drawerContentContainer: {
    paddingTop: LAYOUT.SPACING_XS_16,
  },
  drawerLine: {
    width: LAYOUT.SPACING_MD_36,
    height: LAYOUT.SPACING_XS_4,
    backgroundColor: COLORS.BLACK,
    alignSelf: LAYOUT.ALIGN_CENTER,
    backgroundColor: COLORS.LIGHT_GRAY,
    borderRadius: LAYOUT.SPACING_NUDGE_S,
  },
  drawerProfilePhoto: {
    alignSelf: LAYOUT.ALIGN_CENTER,
    marginTop: LAYOUT.SPACING_XS_12,
    height: LAYOUT.SPACING_MD_40,
    width: LAYOUT.SPACING_MD_40,
    borderRadius: LAYOUT.SPACING_S_20,
  },
  drawerHeaderLine: {
    width: '100%',
    height: LAYOUT.SPACING_NUDGE_S,
    backgroundColor: COLORS.CARD_BOARDER_COLOR,
    alignSelf: LAYOUT.ALIGN_CENTER,
    marginTop: LAYOUT.SPACING_XS_12,
  },
  drawerButton: {
    flexDirection: LAYOUT.FLEX_ROW,
    marginBottom: LAYOUT.SPACING_S_32,
  },
  drawerPhotoEditContainer: {
    width: '100%',
    marginTop: LAYOUT.SPACING_S_32,
  },
  drawerButtonText: {
    marginLeft: LAYOUT.SPACING_S_20,
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_16,
    color: COLORS.PRIMARY_COLOR,
    letterSpacing: FONTS.SPACING_S,
  },
})

export default styles

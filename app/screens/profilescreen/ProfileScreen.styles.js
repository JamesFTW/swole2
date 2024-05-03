import { StyleSheet, Dimensions } from 'react-native'
import { FONTS, COLORS, LAYOUT } from '@constants'

const profileImageHeight = Dimensions.get('window').height / 2

const styles = StyleSheet.create({
  profile_name_location_container: {
    marginTop: LAYOUT.SPACING_XS_16,
  },
  profile_image_container: {
    height: profileImageHeight,
    width: '100%',
  },
  profile_image: {
    width: '100%',
    height: profileImageHeight,
    overflow: LAYOUT.OVERFLOW_HIDDEN,
    resizeMode: 'cover',
  },
  profile_name: {
    color: COLORS.PRIMARY_COLOR,
    fontFamily: FONTS.SFPRO_HEAVY,
    fontSize: FONTS.SIZE_24,
    letterSpacing: -0.02,
    marginLeft: LAYOUT.SPACING_XS_16,
  },
  bio: {
    color: COLORS.PRIMARY_COLOR,
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_14,
    marginTop: LAYOUT.SPACING_S_20,
    letterSpacing: -0.02,
    marginLeft: LAYOUT.SPACING_XS_16,
    marginBottom: LAYOUT.SPACING_S_20,
    lineHeight: LAYOUT.SPACING_S_20,
    marginRight: LAYOUT.SPACING_XS_16,
  },
  edit_button_text: {
    color: COLORS.PRIMARY_COLOR,
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_10,
    letterSpacing: FONTS.SPACING_S,
    alignSelf: LAYOUT.ALIGN_CENTER,
    marginLeft: LAYOUT.SPACING_XS_4,
    marginRight: LAYOUT.SPACING_S_20,
  },
  edit_button: {
    backgroundColor: COLORS.WHITE,
    height: LAYOUT.SPACING_S_28,
    borderRadius: LAYOUT.SPACING_XS_4 + LAYOUT.SPACING_NUDGE_XS,
    borderColor: COLORS.CARD_BOARDER_COLOR,
    borderWidth: LAYOUT.SPACING_NUDGE_XS,
    position: LAYOUT.POSITION_ABSOLUTE,
    right: 0,
    marginTop: LAYOUT.SPACING_XS_16,
    marginRight: LAYOUT.SPACING_XS_16,
  },
  pencil_icon: {
    height: LAYOUT.SPACING_S_28,
    width: LAYOUT.SPACING_S_28,
    top: LAYOUT.SPACING_NUDGE_S,
  },
})

export default styles

import { StyleSheet } from 'react-native'
import { FONTS, COLORS, LAYOUT } from '../../constants'

const styles = StyleSheet.create({
  exercise_title: {
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_16,
    color: COLORS.PRIMARY_COLOR,
    letterSpacing: FONTS.SPACING_S,
    marginLeft: LAYOUT.SPACING_XS_12,
    marginTop: LAYOUT.SPACING_XS_4,
  },
  exercise_image: {
    width: LAYOUT.SPACING_MD_52 - LAYOUT.SPACING_NUDGE_S,
    height: LAYOUT.SPACING_MD_52 - LAYOUT.SPACING_NUDGE_S,
    overflow: 'hidden',
    marginTop: LAYOUT.SPACING_XS_8,
  },
  exercise_header: {
    marginRight: LAYOUT.SPACING_S_24 + LAYOUT.SPACING_NUDGE_XS,
  },
  exercise_completion_icon: {
    position: LAYOUT.POSITION_ABSOLUTE,
    right: 0,
    marginRight: LAYOUT.SPACING_XS_16,
    marginTop: LAYOUT.SPACING_XS_12,
  },
  exercise_subtitle: {
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_16,
    letterSpacing: FONTS.SPACING_S,
    color: COLORS.SUBTITLE_GRAY,
  },
  sets_header: {
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_14,
    color: COLORS.PRIMARY_COLOR,
    letterSpacing: FONTS.SPACING_XS,
  },
  drawer_set_header: {
    marginTop: LAYOUT.SPACING_XS_16,
    marginLeft: LAYOUT.SPACING_XS_8,
    marginRight: LAYOUT.SPACING_XL_80,
  },
  add_set_button: {
    position: LAYOUT.POSITION_ABSOLUTE,
    bottom: LAYOUT.SPACING_NONE,
    width: '100%',
    height: LAYOUT.SPACING_MD_40,
    borderRadius: LAYOUT.SPACING_S_20,
    marginLeft: LAYOUT.SPACING_XS_12,
    marginBottom: LAYOUT.SPACING_S_24,
  },
  add_set_button_text: {
    lineHeight: LAYOUT.SPACING_MD_36,
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_14,
    color: COLORS.WHITE,
    letterSpacing: FONTS.SPACING_XS,
  },
})

export default styles

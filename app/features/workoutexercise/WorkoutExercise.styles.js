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
  exercise_subtitle: {
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_16,
    letterSpacing: FONTS.SPACING_S,
    color: COLORS.SUBTITLE_GRAY,
  },
  exercise_header: {
    // justifyContent: LAYOUT.SPACE_BETWEEN,
    width: 234,
    marginBottom: 2,
  },
  sets_header: {
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_14,
    color: COLORS.PRIMARY_COLOR,
    letterSpacing: 0.01,
  },
  drawer_set_header: {
    marginTop: LAYOUT.SPACING_XS_16,
    marginLeft: LAYOUT.SPACING_XS_8,
    marginRight: 87,
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
    letterSpacing: 0.01,
  },
})

export default styles

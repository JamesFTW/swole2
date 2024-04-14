import { StyleSheet } from 'react-native'
import { LAYOUT, FONTS, COLORS } from '../../../constants'

const styles = StyleSheet.create({
  scroll_container: {
    marginTop: LAYOUT.SPACING_MD_48,
  },
  exercise_title: {
    fontFamily: FONTS.SFPRO_MEDIUM,
    color: COLORS.PRIMARY_COLOR,
    fontSize: LAYOUT.SPACING_S_20,
    letterSpacing: 0.015,
    marginBottom: LAYOUT.SPACING_XS_4,
  },
  timer: {
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_14,
    letterSpacing: 0.01,
    lineHeight: FONTS.SIZE_24,
  },
  exercise_title_container: {
    marginLeft: LAYOUT.SPACING_XS_16,
    marginTop: LAYOUT.SPACING_MD_40,
  },
  exercise_buttons_container: {
    marginLeft: LAYOUT.SPACING_XS_16,
    marginRight: LAYOUT.SPACING_XS_16,
    marginTop: 10,
  },
  exercise_buttons: {
    height: LAYOUT.SPACING_MD_40,
    marginBottom: LAYOUT.SPACING_XS_16,
    borderRadius: LAYOUT.SPACING_S_20,
    letterSpacing: FONTS.SPACING_XS,
    marginLeft: 5,
    marginRight: 5,
  },
  exercise_buttons_text: {
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: 14,
    textAlign: 'center',
    letterSpacing: FONTS.SPACING_XS,
  },
  date: {
    color: COLORS.PRIMARY_COLOR,
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_16,
    letterSpacing: FONTS.SPACING_S,
    marginBottom: LAYOUT.SPACING_MD_52,
  },
  finish_workout_button: {
    position: 'absolute',
    borderRadius: LAYOUT.SPACING_XS_16,
    borderColor: COLORS.SECONDARY_COLOR,
    backgroundColor: COLORS.SECONDARY_COLOR,
    marginRight: LAYOUT.SPACING_XS_16,
    height: LAYOUT.SPACING_S_32,
    width: 92,
    top: -4,
    right: 0,
  },
  finish_workout_button_text: {
    fontSize: FONTS.SIZE_12,
    alignItems: 'center',
    lineHeight: FONTS.SIZE_12,
    justifyContent: 'center',
    letterSpacing: FONTS.SPACING_XL,
  },
})

export default styles

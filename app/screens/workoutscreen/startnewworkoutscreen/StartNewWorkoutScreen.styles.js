import { StyleSheet } from 'react-native'
import { LAYOUT, FONTS, COLORS } from '@constants'

const styles = StyleSheet.create({
  scroll_container: {
    marginTop: LAYOUT.SPACING_MD_48,
  },
  exercise_title: {
    fontFamily: FONTS.SFPRO_MEDIUM,
    color: COLORS.PRIMARY_COLOR,
    fontSize: LAYOUT.SPACING_S_20,
    letterSpacing: FONTS.SPACING_S,
    marginBottom: LAYOUT.SPACING_XS_4,
  },
  timer: {
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_14,
    letterSpacing: FONTS.SPACING_XS,
    lineHeight: FONTS.SIZE_24,
  },
  exercise_title_container: {
    marginLeft: LAYOUT.SPACING_XS_16,
    marginTop: LAYOUT.SPACING_MD_40,
  },
  workout_exercise_container: {
    marginLeft: LAYOUT.SPACING_XS_16,
    marginRight: LAYOUT.SPACING_XS_16,
    marginTop: LAYOUT.SPACING_XS_12,
  },
  exercise_buttons_container: {
    marginTop: LAYOUT.SPACING_XS_12,
  },
  exercise_buttons: {
    height: LAYOUT.SPACING_MD_40,
    marginBottom: LAYOUT.SPACING_XS_16,
    borderRadius: LAYOUT.SPACING_S_20,
    letterSpacing: FONTS.SPACING_XS,
    marginLeft: LAYOUT.SPACING_XS_4,
    marginRight: LAYOUT.SPACING_XS_4,
  },
  exercise_buttons_text: {
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_14,
    textAlign: LAYOUT.ALIGN_CENTER,
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
    position: LAYOUT.POSITION_ABSOLUTE,
    borderRadius: LAYOUT.SPACING_XS_16,
    borderColor: COLORS.SECONDARY_COLOR,
    backgroundColor: COLORS.SECONDARY_COLOR,
    marginRight: LAYOUT.SPACING_XS_16,
    height: LAYOUT.SPACING_S_32,
    paddingLeft: LAYOUT.SPACING_S_20,
    paddingRight: LAYOUT.SPACING_S_20,
    top: -LAYOUT.SPACING_XS_4,
    right: 0,
  },
  finish_workout_button_text: {
    fontSize: FONTS.SIZE_12,
    alignItems: LAYOUT.ALIGN_CENTER,
    lineHeight: FONTS.SIZE_12,
    justifyContent: LAYOUT.ALIGN_CENTER,
    letterSpacing: FONTS.SPACING_XL,
  },
  workout_exercise_component_container: {
    marginBottom: LAYOUT.SPACING_XS_12 - LAYOUT.SPACING_NUDGE_S,
  },
})

export default styles

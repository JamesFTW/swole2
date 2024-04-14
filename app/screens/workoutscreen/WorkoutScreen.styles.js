import { StyleSheet, Dimensions } from 'react-native'
import { LAYOUT, FONTS, COLORS } from '../../constants'

const styles = StyleSheet.create({
  date: {
    color: COLORS.PRIMARY_COLOR,
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_16,
    letterSpacing: FONTS.SPACING_S,
    marginBottom: LAYOUT.SPACING_XS_8,
  },
  start_new_workout_container: {
    marginLeft: 2,
    marginBottom: LAYOUT.SPACING_S_28,
  },
  start_new_workout: {
    color: COLORS.PRIMARY_COLOR,
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_20,
    letterSpacing: FONTS.SPACING_S,
    marginLeft: LAYOUT.SPACING_XS_8,
  },
  workout_screen_container: {
    paddingLeft: 14,
    paddingTop: LAYOUT.SPACING_MD_40,
    paddingRight: 14,
  },
  quote: {
    color: COLORS.SECONDARY_COLOR,
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_14,
    letterSpacing: -0.02,
    marginBottom: LAYOUT.SPACING_S_28,
  },
  workout_plans_title: {
    color: COLORS.PRIMARY_COLOR,
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_16,
    letterSpacing: FONTS.SPACING_S,
    marginLeft: LAYOUT.SPACING_NUDGE_S,
  },
  workout_plans_view_all: {
    color: COLORS.SECONDARY_COLOR,
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_14,
    letterSpacing: FONTS.SPACING_S,
    marginTop: 5,
  },
  workout_plans_component: {
    justifyContent: 'space-between',
  },
  exercises_component: {
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  exercises_container: {
    marginTop: 28,
  },
  workout_card: {
    height: 99,
    width: 99,
    backgroundColor: '#C4C4C4',
    marginTop: 24,
    borderRadius: 10,
    marginRight: 12,
  },
})

export default styles

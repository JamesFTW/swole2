import { StyleSheet, Dimensions } from 'react-native'
import { LAYOUT, FONTS, COLORS } from '../../../constants'
const profileImageHeight = Dimensions.get('window').height / 2

const styles = StyleSheet.create({
  exercise_image: {
    width: null,
    height: profileImageHeight,
  },
  exercise_title: {
    color: COLORS.PRIMARY_COLOR,
    flex: 1,
    flexWrap: 'wrap',
    fontFamily: FONTS.SFPRO_HEAVY,
    fontSize: FONTS.SIZE_20,
    letterSpacing: FONTS.SPACING_S,
    marginLeft: LAYOUT.SPACING_XS_16,
  },
  exercise_description: {
    color: COLORS.PRIMARY_COLOR,
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_14,
    letterSpacing: 0.25,
    marginLeft: LAYOUT.SPACING_S_20,
    marginRight: LAYOUT.SPACING_XS_16,
    lineHeight: LAYOUT.SPACING_S_20,
    marginTop: 28,
  },
  target_muscle: {
    color: COLORS.SECONDARY_COLOR,
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_14,
    letterSpacing: -0.02,
    marginTop: 4,
  },
  last_attempts: {
    color: COLORS.PRIMARY_COLOR,
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_20,
    letterSpacing: FONTS.SPACING_S,
    marginLeft: LAYOUT.SPACING_XS_16,
    marginTop: LAYOUT.SPACING_S_28,
  },
  total_weight: {
    color: COLORS.PRIMARY_COLOR,
    fontFamily: FONTS.SFPRO_HEAVY,
    fontSize: FONTS.SIZE_20,
    letterSpacing: FONTS.SPACING_S,
    textAlign: 'right',
  },
  total_weight_container: {
    position: 'absolute',
    right: 0,
    marginRight: LAYOUT.SPACING_XS_16,
    marginTop: LAYOUT.SPACING_S_20,
  },
  total_weight_subtitle: {
    color: COLORS.SECONDARY_COLOR,
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_14,
    letterSpacing: -0.02,
    marginTop: 4,
  },
  exercise_last_attempt_date: {
    marginLeft: LAYOUT.SPACING_XS_16,
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_16,
    letterSpacing: 0.05,
  },
  exercise_last_attempt_rep: {
    marginRight: LAYOUT.SPACING_XS_16,
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_16,
    letterSpacing: 0.05,
  },
  exercise_first_attempt: {
    marginTop: LAYOUT.SPACING_S_20,
    marginLeft: LAYOUT.SPACING_XS_12,
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_16,
    letterSpacing: 0.05,
  },
})

export default styles

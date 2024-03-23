import { StyleSheet } from 'react-native';
import { FONTS, COLORS, LAYOUT } from '../../constants'

const styles = StyleSheet.create({
  exercise_title: {
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_20,
    color: COLORS.PRIMARY_COLOR,
    letterSpacing: FONTS.SPACING_S,
    marginLeft: LAYOUT.SPACING_XS_16,
  },
  exercise_subtitle: {
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_16,
    letterSpacing: FONTS.SPACING_S,
    color: COLORS.SUBTITLE_GRAY,
  },
  highlighted_exercise_title: {
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_20,
    color: COLORS.PRIMARY_COLOR,
    letterSpacing: FONTS.SPACING_S,
    marginLeft: LAYOUT.SPACING_XS_16,
  },
  highlighted_exercise_card: {
    borderWidth: 1,
    borderColor: COLORS.SUCCESS_BLUE,
    backgroundColor: '#D0E3FF',
  }
})

export default styles
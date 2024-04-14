import { StyleSheet } from 'react-native'
import { FONTS, COLORS, LAYOUT } from '../../../../constants'

const styles = StyleSheet.create({
  exercise_subtitle: {
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_12,
    letterSpacing: 0.02,
    color: COLORS.SUBTITLE_GRAY,
    alignSelf: LAYOUT.ALIGN_CENTER,
  },
  exercise_subtitle_number: {
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_14,
    letterSpacing: FONTS.SPACING_S,
    color: COLORS.PRIMARY_COLOR,
    alignSelf: LAYOUT.ALIGN_CENTER,
  },
  container: {
    width: LAYOUT.SPACING_MD_40,
  },
})

export default styles

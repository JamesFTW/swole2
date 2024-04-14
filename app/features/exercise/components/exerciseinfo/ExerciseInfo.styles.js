import { StyleSheet } from 'react-native'
import { FONTS, COLORS, LAYOUT } from '../../../../constants'

const styles = StyleSheet.create({
  exercise_subtitle: {
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_16,
    letterSpacing: FONTS.SPACING_S,
    color: COLORS.SUBTITLE_GRAY,
    alignSelf: LAYOUT.ALIGN_CENTER,
  },
})

export default styles

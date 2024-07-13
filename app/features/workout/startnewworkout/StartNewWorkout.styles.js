import { StyleSheet } from 'react-native'
import { LAYOUT, FONTS, COLORS } from '@constants'

const styles = StyleSheet.create({
  buttonStyle: {
    paddingTop: LAYOUT.SPACING_XS_16,
    paddingBottom: LAYOUT.SPACING_XS_16,
    backgroundColor: COLORS.BACKGROUND_COLOR,
    justifyContent: LAYOUT.ALIGN_CENTER,
  },
  flexContainer: {
    marginLeft: LAYOUT.SPACING_S_28,
  },
  startNewWorkoutText: {
    color: COLORS.PRIMARY_COLOR,
    fontFamily: FONTS.SFPRO_HEAVY,
    fontSize: FONTS.SIZE_20,
    letterSpacing: FONTS.SPACING_S,
    marginLeft: LAYOUT.SPACING_XS_12 + LAYOUT.SPACING_NUDGE_S,
  },
})

export default styles

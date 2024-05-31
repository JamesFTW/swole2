import { StyleSheet } from 'react-native'
import { LAYOUT, FONTS, COLORS } from '@constants'

const styles = StyleSheet.create({
  buttonStyle: {
    paddingTop: LAYOUT.SPACING_S_32,
    paddingBottom: LAYOUT.SPACING_S_32,
    backgroundColor: COLORS.WHITE,
    justifyContent: LAYOUT.ALIGN_CENTER,
    borderTopColor: COLORS.CARD_BOARDER_COLOR,
    borderTopWidth: LAYOUT.SPACING_NUDGE_XS,
  },
  flexContainer: {
    marginLeft: LAYOUT.SPACING_S_20,
  },
  startNewWorkoutText: {
    color: COLORS.PRIMARY_COLOR,
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_20,
    letterSpacing: FONTS.SPACING_S,
    marginLeft: LAYOUT.SPACING_XS_8,
  },
})

export default styles

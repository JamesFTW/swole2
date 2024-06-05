import { StyleSheet } from 'react-native'
import { LAYOUT, COLORS, FONTS } from '@constants'

const styles = StyleSheet.create({
  flexContainer: {
    justifyContent: LAYOUT.SPACE_BETWEEN,
    backgroundColor: COLORS.WHITE,
    paddingLeft: LAYOUT.SPACING_XS_12,
    paddingRight: LAYOUT.SPACING_XS_16 + LAYOUT.SPACING_NUDGE_S,
    paddingTop: LAYOUT.SPACING_XS_8,
    paddingBottom: LAYOUT.SPACING_S_24,
  },
  snapshotTitle: {
    fontFamily: FONTS.SFPRO_HEAVY,
    color: COLORS.PRIMARY_COLOR,
    fontSize: FONTS.SIZE_14,
    letterSpacing: FONTS.SPACING_S,
  },
  seeMoreButton: {
    fontFamily: FONTS.SFPRO_REGULAR,
    color: COLORS.SUCCESS_BLUE,
    fontSize: FONTS.SIZE_14,
    letterSpacing: FONTS.SPACING_M, //todo: Make letterSpacing a constant
  },
})

export default styles

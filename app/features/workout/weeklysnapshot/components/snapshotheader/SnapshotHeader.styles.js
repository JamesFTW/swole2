import { StyleSheet } from 'react-native'
import { LAYOUT, COLORS, FONTS } from '@constants'

const styles = StyleSheet.create({
  flexContainer: {
    justifyContent: LAYOUT.SPACE_BETWEEN,
    backgroundColor: COLORS.WHITE,
    paddingLeft: LAYOUT.SPACING_S_20,
    paddingRight: LAYOUT.SPACING_S_20,
    paddingBottom: LAYOUT.SPACING_S_24,
  },
  snapshotTitle: {
    fontFamily: FONTS.SFPRO_HEAVY,
    color: COLORS.PRIMARY_COLOR,
    fontSize: FONTS.SIZE_14,
  },
  seeMoreButton: {
    fontFamily: FONTS.SFPRO_REGULAR,
    color: COLORS.SUCCESS_BLUE,
    fontSize: FONTS.SIZE_14,
  },
})

export default styles

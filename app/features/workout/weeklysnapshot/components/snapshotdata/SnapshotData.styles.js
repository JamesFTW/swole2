import { StyleSheet } from 'react-native'
import { COLORS, FONTS, LAYOUT } from '@constants'

const styles = StyleSheet.create({
  flexContainer: {
    paddingLeft: LAYOUT.SPACING_S_20,
    backgroundColor: COLORS.WHITE,
  },
  titleText: {
    marginBottom: LAYOUT.SPACING_XS_8,
    fontFamily: FONTS.SFPRO_REGULAR,
    color: COLORS.SECONDARY_COLOR,
    fontSize: FONTS.SIZE_12,
  },
  info: {
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_20,
    marginBottom: LAYOUT.SPACING_XS_12,
    marginRight: LAYOUT.SPACING_S_20,
  },
})

export default styles

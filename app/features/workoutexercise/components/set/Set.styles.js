import { StyleSheet } from 'react-native'
import { FONTS, COLORS, LAYOUT } from '@constants'

const styles = StyleSheet.create({
  flex_container: {
    marginTop: LAYOUT.SPACING_XS_12,
  },
  set_info: {
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_16,
    color: COLORS.SECONDARY_COLOR,
    letterSpacing: FONTS.SPACING_S,
    flex: LAYOUT.SPACING_NUDGE_XS,
  },
  set_completed: {
    position: LAYOUT.POSITION_ABSOLUTE,
    marginTop: LAYOUT.SPACING_XS_8 + LAYOUT.SPACING_NUDGE_S,
    marginRight: LAYOUT.SPACING_XS_16 + LAYOUT.SPACING_NUDGE_S,
    right: LAYOUT.SPACING_NUDGE_S,
    zIndex: LAYOUT.SPACING_NUDGE_XS,
  },
})

export default styles

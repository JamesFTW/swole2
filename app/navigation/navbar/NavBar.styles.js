import { StyleSheet } from 'react-native'
import { COLORS, LAYOUT } from '../../constants'

const styles = StyleSheet.create({
  navBar_container: {
    height: LAYOUT.SPACING_XL_72,
    borderTopColor: COLORS.CARD_BOARDER_COLOR,
    borderTopWidth: LAYOUT.SPACING_NUDGE_XS,
    backgroundColor: COLORS.WHITE_WHITE,
    paddingLeft: LAYOUT.SPACING_S_24,
    paddingRight: LAYOUT.SPACING_S_28,
  },
  navBar_icon_container: {
    justifyContent: LAYOUT.SPACE_BETWEEN,
  },
  nav_Icon: {
    width: LAYOUT.SPACING_XL_72,
    alignItems: LAYOUT.ALIGN_CENTER,
  },
})

export default styles

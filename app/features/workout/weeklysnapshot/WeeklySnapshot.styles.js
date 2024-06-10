import { StyleSheet } from 'react-native'
import { COLORS, LAYOUT } from '@constants'

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.CARD_BOARDER_COLOR,
    borderWidth: LAYOUT.SPACING_NUDGE_XS,
  },
  flexContainer: {
    flexDirection: LAYOUT.FLEX_ROW,
    width: '100%',
    paddingLeft: LAYOUT.SPACING_XS_12,
    marginBottom: LAYOUT.SPACING_XS_12,
  },
})

export default styles

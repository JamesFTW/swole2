import { StyleSheet } from 'react-native'
import { COLORS, LAYOUT, FONTS } from '../../constants'

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.TRANSPARENT,
    borderBottomWidth: LAYOUT.SPACING_NUDGE_XS,
    borderBottomColor: COLORS.CARD_BOARDER_COLOR,
    justifyContent: LAYOUT.ALIGN_CENTER,
  },
  headerContent: {
    flexDirection: LAYOUT.FLEX_ROW,
    marginTop: LAYOUT.SPACING_XS_16,
    alignItems: LAYOUT.ALIGN_CENTER,
    marginBottom: LAYOUT.SPACING_XS_16,
  },
  headerText: {
    fontSize: FONTS.SIZE_20,
    fontFamily: FONTS.SFPRO_MEDIUM,
    color: COLORS.PRIMARY_COLOR,
    textAlign: LAYOUT.ALIGN_CENTER,
    position: LAYOUT.POSITION_ABSOLUTE,
    width: '100%',
  },
  backButton: {
    marginLeft: LAYOUT.SPACING_XS_16,
    justifyContent: LAYOUT.ALIGN_CENTER,
    zIndex: LAYOUT.SPACING_NUDGE_XS,
  },
})

export default styles

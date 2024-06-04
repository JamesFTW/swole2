import { StyleSheet } from 'react-native'
import { COLORS, LAYOUT, FONTS } from '@constants'

const styles = StyleSheet.create({
  container: {
    padding: LAYOUT.SPACING_S_20,
    borderColor: COLORS.CARD_BOARDER_COLOR,
    borderWidth: LAYOUT.SPACING_NUDGE_XS,
    backgroundColor: COLORS.WHITE,
    marginBottom: LAYOUT.SPACING_XS_12,
  },
  profilePhoto: {
    alignSelf: LAYOUT.ALIGN_CENTER,
    height: LAYOUT.SPACING_MD_36,
    width: LAYOUT.SPACING_MD_36,
    borderRadius: LAYOUT.SPACING_S_20,
    overflow: LAYOUT.OVERFLOW_HIDDEN,
    marginRight: LAYOUT.SPACING_XS_12,
    marginTop: LAYOUT.SPACING_XS_4,
  },
  userHeaderContainer: {
    marginLeft: LAYOUT.SPACING_NUDGE_XS,
  },
  userName: {
    fontSize: FONTS.SIZE_16,
    fontFamily: FONTS.SFPRO_REGULAR,
    color: COLORS.PRIMARY_COLOR,
    marginBottom: LAYOUT.SPACING_XS_4,
  },
  workoutDataLocation: {
    fontSize: FONTS.SIZE_12,
    fontFamily: FONTS.SFPRO_REGULAR,
    color: COLORS.PRIMARY_COLOR,
    right: LAYOUT.SPACING_NUDGE_XS,
  },
  workoutTitle: {
    fontSize: FONTS.SIZE_20,
    fontFamily: FONTS.SFPRO_MEDIUM,
    letterSpacing: FONTS.SPACING_M,
    color: COLORS.PRIMARY_COLOR,
    marginTop: LAYOUT.SPACING_XS_12,
    marginBottom: LAYOUT.SPACING_S_24,
    marginLeft: LAYOUT.SPACING_MD_48 - LAYOUT.SPACING_NUDGE_XS,
  },
  workoutDataContainer: {
    alignItems: LAYOUT.ALIGN_CENTER,
    flex: LAYOUT.SPACING_NUDGE_XS,
  },
  verticalDivider: {
    width: LAYOUT.SPACING_NUDGE_XS,
    backgroundColor: COLORS.CARD_BOARDER_COLOR,
    height: '80%',
  },
  workoutDataTitle: {
    fontSize: FONTS.SIZE_12,
    fontFamily: FONTS.SFPRO_REGULAR,
    color: COLORS.PRIMARY_COLOR,
    letterSpacing: FONTS.SPACING_M,
    marginBottom: LAYOUT.SPACING_XS_4,
  },
  workoutDataInfo: {
    fontSize: FONTS.SIZE_16,
    fontFamily: FONTS.SFPRO_MEDIUM,
    color: COLORS.PRIMARY_COLOR,
    letterSpacing: FONTS.SPACING_S,
  },
  divider: {
    height: LAYOUT.SPACING_NUDGE_XS,
    backgroundColor: COLORS.CARD_BOARDER_COLOR,
    marginTop: LAYOUT.SPACING_XS_12,
    marginBottom: LAYOUT.SPACING_XS_12,
  },
})

export default styles

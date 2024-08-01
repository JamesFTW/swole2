import { StyleSheet } from 'react-native'
import { COLORS, FONTS, LAYOUT } from '@constants'

const styles = StyleSheet.create({
  workoutHeaderContainer: {
    marginTop: LAYOUT.SPACING_XS_16,
    width: '100%',
  },
  workoutHeaderContent: {
    flexDirection: LAYOUT.FLEX_ROW,
    justifyContent: LAYOUT.SPACE_BETWEEN,
    paddingLeft: LAYOUT.SPACING_XS_16,
    paddingRight: LAYOUT.SPACING_XS_16,
    paddingBottom: LAYOUT.SPACING_XS_16,
    borderBottomWidth: LAYOUT.SPACING_NUDGE_XS,
    borderBottomColor: COLORS.CARD_BOARDER_COLOR,
  },
  workoutHeaderTitle: {
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_20,
    letterSpacing: FONTS.SPACING_S,
    alignSelf: LAYOUT.ALIGN_CENTER,
  },
  workoutHeaderButtons: {
    alignSelf: LAYOUT.ALIGN_CENTER,
  },
  emptyWorkoutBody: {
    textAlign: 'center',
    fontFamily: FONTS.SFPRO_MEDIUM,
    color: COLORS.PRIMARY_COLOR,
    letterSpacing: FONTS.SPACING_S,
    lineHeight: LAYOUT.SPACING_S_20,
    paddingLeft: 45,
    paddingRight: 45,
    paddingTop: LAYOUT.SPACING_XS_16,
    paddingBottom: LAYOUT.SPACING_S_24,
  },
  exercise_buttons_text: {
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_14,
    textAlign: LAYOUT.ALIGN_CENTER,
    letterSpacing: FONTS.SPACING_XS,
  },
  exercise_buttons: {
    height: LAYOUT.SPACING_MD_40,
    marginBottom: LAYOUT.SPACING_XS_16,
    borderRadius: LAYOUT.SPACING_S_20,
    letterSpacing: FONTS.SPACING_XS,
    marginLeft: LAYOUT.SPACING_XS_16,
    marginRight: LAYOUT.SPACING_XS_16,
  },
})

export default styles

import { StyleSheet } from 'react-native'
import { FONTS, COLORS, LAYOUT } from '@constants'

const styles = StyleSheet.create({
  cardContent: {
    flexDirection: LAYOUT.FLEX_COLUMN,
  },
  exerciseHeader: {
    flexDirection: LAYOUT.FLEX_ROW,
    justifyContent: LAYOUT.SPACE_BETWEEN,
    alignItems: LAYOUT.ALIGN_CENTER,
    marginBottom: LAYOUT.SPACING_XS_16,
  },
  exerciseTitleContainer: {
    justifyContent: LAYOUT.ALIGN_CENTER,
    marginLeft: LAYOUT.SPACING_XS_12,
  },
  exercise_title: {
    fontFamily: FONTS.SFPRO_HEAVY,
    fontSize: FONTS.SIZE_16,
    color: COLORS.PRIMARY_COLOR,
    letterSpacing: FONTS.SPACING_S,
  },
  exercise_image: {
    width: LAYOUT.SPACING_MD_52 - LAYOUT.SPACING_NUDGE_S,
    height: LAYOUT.SPACING_MD_52 - LAYOUT.SPACING_NUDGE_S,
    overflow: 'hidden',
  },
  exercise_completion_icon: {
    marginRight: LAYOUT.SPACING_XS_16,
  },
  sets_header: {
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_14,
    color: COLORS.PRIMARY_COLOR,
    letterSpacing: FONTS.SPACING_XS,
  },
  setHeaderRow: {
    marginBottom: LAYOUT.SPACING_XS_8,
  },
  setHeaderCell: {
    flex: LAYOUT.SPACING_NUDGE_XS,
    marginLeft: LAYOUT.SPACING_XS_16,
  },
  setsContainer: {
    width: '100%',
    marginLeft: LAYOUT.SPACING_XS_16,
  },
  buttonContainer: {
    marginTop: LAYOUT.SPACING_S_24,
  },
  add_set_button: {
    height: LAYOUT.SPACING_MD_40,
    borderRadius: LAYOUT.SPACING_S_20,
    marginBottom: LAYOUT.SPACING_XS_12,
  },
  add_set_button_text: {
    lineHeight: LAYOUT.SPACING_MD_36,
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_14,
    color: COLORS.WHITE,
    letterSpacing: FONTS.SPACING_XS,
  },
})

export default styles

import { StyleSheet } from 'react-native'
import { LAYOUT, FONTS, COLORS } from '@constants'

const styles = StyleSheet.create({
  profileSettingsFormContainer: {
    paddingLeft: LAYOUT.SPACING_S_28,
    paddingRight: LAYOUT.SPACING_XS_8,
    paddingBottom: LAYOUT.SPACING_S_20,
    backgroundColor: COLORS.WHITE,
    marginTop: LAYOUT.SPACING_S_20,
    marginBottom: LAYOUT.SPACING_S_20,
    borderColor: COLORS.CARD_BOARDER_COLOR,
    borderWidth: LAYOUT.SPACING_NUDGE_XS,
  },
  profileSettingsFormContent: {
    marginTop: LAYOUT.SPACING_S_24,
  },
  profileSettingsFormField: {
    flexDirection: LAYOUT.FLEX_ROW,
    marginBottom: LAYOUT.SPACING_XS_12,
  },
  profileSettingsText: {
    minWidth: 100,
    fontFamily: FONTS.SFPRO_REGULAR,
    color: COLORS.PRIMARY_COLOR,
    fontSize: LAYOUT.SPACING_XS_16,
    letterSpacing: FONTS.SPACING_S,
  },
  profileSettingsPlaceholder: {
    minWidth: 100,
    fontFamily: FONTS.SFPRO_REGULAR,
    color: COLORS.CARD_BOARDER_COLOR,
    fontSize: LAYOUT.SPACING_XS_16,
    letterSpacing: FONTS.SPACING_S,
  },
  profileSettingsLineSeparator: {
    height: LAYOUT.SPACING_NUDGE_XS,
    backgroundColor: COLORS.CARD_BOARDER_COLOR,
    marginTop: LAYOUT.SPACING_XS_16 - LAYOUT.SPACING_NUDGE_S,
  },
  profileSettingsFormFieldInput: {
    width: '70%',
  },
})

export default styles

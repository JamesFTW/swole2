import { StyleSheet } from 'react-native'
import { LAYOUT, FONTS, COLORS } from '@app/constants'

const styles = StyleSheet.create({
  scrollContainer: {
    height: '100%',
    marginTop: LAYOUT.SPACING_XS_16,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: COLORS.WHITE,
    paddingLeft: LAYOUT.SPACING_S_28,
    flexDirection: LAYOUT.FLEX_ROW,
  },
  profileSettingsFormField: {
    marginBottom: LAYOUT.SPACING_XS_12,
  },
  profileSettingsText: {
    fontFamily: FONTS.SFPRO_REGULAR,
    color: COLORS.SECONDARY_COLOR,
    fontSize: LAYOUT.SPACING_XS_12 + LAYOUT.SPACING_NUDGE_S,
    letterSpacing: FONTS.SPACING_S,
    marginTop: LAYOUT.SPACING_XS_8,
  },
  profileSettingsInputText: {
    fontFamily: FONTS.SFPRO_REGULAR,
    color: COLORS.PRIMARY_COLOR,
    fontSize: LAYOUT.SPACING_XS_12 + LAYOUT.SPACING_NUDGE_S,
    letterSpacing: FONTS.SPACING_S,
    marginTop: LAYOUT.SPACING_XS_4,
  },
})

export default styles

import { StyleSheet } from 'react-native'
import { LAYOUT, COLORS, FONTS } from '@constants'

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    marginLeft: LAYOUT.SPACING_XS_16,
    paddingTop: LAYOUT.SPACING_XS_16,
    paddingBottom: LAYOUT.SPACING_XS_16,
    height: 55, // Set a fixed height to prevent shrinking
  },
  textInput: {
    position: LAYOUT.POSITION_ABSOLUTE,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: LAYOUT.SPACING_XS_16,
    paddingBottom: LAYOUT.SPACING_XS_16,
  },
  placeholderContainer: {
    position: LAYOUT.POSITION_ABSOLUTE,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: LAYOUT.ALIGN_CENTER,
  },
  placeholder: {
    paddingTop: LAYOUT.SPACING_XS_16,
    paddingBottom: LAYOUT.SPACING_XS_16,
    letterSpacing: FONTS.SPACING_S,
  },
  errorText: {
    color: COLORS.ALERT_COLOR,
    fontFamily: FONTS.SFPRO_HEAVY,
    fontSize: FONTS.SIZE_12,
    marginTop: LAYOUT.SPACING_XS_4,
    marginBottom: LAYOUT.SPACING_XS_12,
    marginLeft: LAYOUT.SPACING_XS_16,
  },
})
export default styles

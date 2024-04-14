import { StyleSheet } from 'react-native'
import { LAYOUT, COLORS, FONTS } from '../../constants'

/**
 * TODO:
 *
 * Fix this so that it is more general.
 */

const styles = StyleSheet.create({
  buttonOutline: {
    backgroundColor: COLORS.WHITE,
    justifyContent: LAYOUT.ALIGN_CENTER,
    borderColor: COLORS.PRIMARY_COLOR,
    borderWidth: 1,
    // height: LAYOUT.SPACING_MD_48,
    // borderRadius: 10,
    marginLeft: LAYOUT.SPACING_S_20,
    marginRight: LAYOUT.SPACING_S_20,
  },
  textOutline: {
    flex: 1,
    fontSize: FONTS.SIZE_16,
    fontFamily: FONTS.SFPRO_MEDIUM,
    color: COLORS.PRIMARY_COLOR,
    // justifyContent: LAYOUT.ALIGN_CENTER,
    // alignItems: LAYOUT.ALIGN_CENTER,
    // lineHeight: LAYOUT.SPACING_MD_48,
    // textAlign: 'center'
  },
  button: {
    backgroundColor: COLORS.PRIMARY_COLOR,
    alignItems: LAYOUT.ALIGN_CENTER,
    justifyContent: LAYOUT.ALIGN_CENTER,
    borderColor: COLORS.PRIMARY_COLOR,
    borderWidth: 1,
    height: LAYOUT.SPACING_MD_48,
    borderRadius: 10,
  },
  text: {
    fontSize: FONTS.SIZE_16,
    fontFamily: FONTS.SFPRO_MEDIUM,
    color: COLORS.WHITE,
    justifyContent: LAYOUT.ALIGN_CENTER,
    textAlign: LAYOUT.ALIGN_CENTER,
    lineHeight: LAYOUT.SPACING_MD_48,
    letterSpacing: 0.125,
  },
})

export default styles

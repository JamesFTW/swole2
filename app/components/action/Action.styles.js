import { StyleSheet } from 'react-native';
import { LAYOUT, FONTS } from '../../constants'

const styles = StyleSheet.create({
  action_container: {
    alignSelf: LAYOUT.FLEX_START,
    textAlign: LAYOUT.ALIGN_CENTER,
    borderRadius: LAYOUT.SPACING_S_24,
  },
  action_title: {
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_10,
    letterSpacing: FONTS.SPACING_S,
  },
  action_inside: {
    alignSelf: LAYOUT.ALIGN_CENTER,
    paddingTop: LAYOUT.SPACING_XS_4,
    paddingBottom: LAYOUT.SPACING_XS_4,
    marginLeft: LAYOUT.SPACING_XS_8,
    marginRight: LAYOUT.SPACING_XS_8,
  }
})

export default styles
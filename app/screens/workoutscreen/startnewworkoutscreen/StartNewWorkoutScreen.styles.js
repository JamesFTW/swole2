import { StyleSheet } from 'react-native'
import { LAYOUT, FONTS, COLORS } from '../../../constants'

const styles = StyleSheet.create({
  scroll_container: {
    marginTop: LAYOUT.SPACING_MD_48
  },
  exercise_title: {
    fontFamily: FONTS.SFPRO_MEDIUM,
    color: COLORS.PRIMARY_COLOR,
    fontSize: LAYOUT.SPACING_S_20,
    letterSpacing: .015,
    marginBottom: LAYOUT.SPACING_XS_4
  },
  timer: {
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_14,
    letterSpacing: .01,
    lineHeight: FONTS.SIZE_24,
  },
  exercise_title_container: {
    marginLeft: LAYOUT.SPACING_XS_16,
    marginTop: LAYOUT.SPACING_MD_40
  },
  exercise_buttons_container: {
    marginLeft: LAYOUT.SPACING_XS_16, 
    marginRight: LAYOUT.SPACING_XS_16, 
    marginTop: LAYOUT.SPACING_MD_40
  },
  exercise_buttons: {
    height: LAYOUT.SPACING_MD_40,
    marginBottom: 16,
    borderRadius: 10,
  },
  exercise_buttons_text: {
    textAlign: 'center'
  },
  date: {
    color: COLORS.PRIMARY_COLOR,
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_16,
    letterSpacing: FONTS.SPACING_S,
    marginBottom: LAYOUT.SPACING_MD_52
  },
})

export default styles
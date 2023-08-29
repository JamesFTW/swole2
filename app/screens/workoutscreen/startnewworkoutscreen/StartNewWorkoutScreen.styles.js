import { StyleSheet } from 'react-native'
import { LAYOUT, FONTS, COLORS } from '../../../constants'

const styles = StyleSheet.create({
  scroll_container: {
    marginTop: 45
  },
  exercise_title: {
    fontFamily: FONTS.SFPRO_MEDIUM,
    color: COLORS.PRIMARY_COLOR,
    fontSize: 20,
    letterSpacing: .015,
    marginBottom: 4
  },
  timer: {
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: 14,
    letterSpacing: .01,
    lineHeight: 24,
  },
  exercise_title_container: {
    marginLeft: 16,
    marginTop: 40
  },
  exercise_buttons_container: {
    marginLeft: 16, 
    marginRight: 16, 
    marginTop: 40
  },
  exercise_buttons: {
    height: 44,
    marginBottom: 24,
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
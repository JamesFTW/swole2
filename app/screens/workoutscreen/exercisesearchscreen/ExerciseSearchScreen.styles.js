import { StyleSheet } from 'react-native'
import { FONTS, LAYOUT, COLORS } from '../../../constants'

const styles = StyleSheet.create({
  search_input: {
    height: LAYOUT.SPACING_MD_48,
    marginBottom: LAYOUT.SPACING_S_24,
    backgroundColor: COLORS.LIGHT_GRAY,
  },
  exercise_group_letter: {
    fontSize: 16,
    fontFamily: FONTS.SFPRO_REGULAR,
    color: COLORS.PRIMARY_COLOR,
    letterSpacing: 0.015,
    marginBottom: LAYOUT.SPACING_XS_16,
  },
  search_section: {
    height: LAYOUT.SPACING_MD_48,
    backgroundColor: COLORS.LIGHT_GRAY,
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: LAYOUT.SPACING_S_24,
  },
  exercises_title: {
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_16,
    marginBottom: LAYOUT.SPACING_S_20,
  },
  scroll_content_container: {
    marginTop: LAYOUT.SPACING_MD_40,
    marginRight: LAYOUT.SPACING_XS_12,
    marginLeft: LAYOUT.SPACING_XS_12,
  },
  search_bar: {
    marginTop: LAYOUT.SPACING_XS_16,
    marginLeft: LAYOUT.SPACING_XS_16,
    marginRight: LAYOUT.SPACING_XS_12,
  },
  back_button: {
    marginTop: LAYOUT.SPACING_S_24,
  },
  flex_header_container: {
    marginTop: 22,
    justifyContent: 'space-between',
  },
})

export default styles

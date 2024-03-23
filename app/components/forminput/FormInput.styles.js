import { StyleSheet } from 'react-native'
import { LAYOUT, COLORS, FONTS } from '../../constants'

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textInput : {
    position: LAYOUT.POSITION_ABSOLUTE,
    fontFamily: FONTS.SFPRO_MEDIUM,
    color: COLORS.PRIMARY_COLOR,
    fontSize: FONTS.SIZE_14,
    marginTop: 26,
  },
  formInput: {
    borderBottomColor: COLORS.PRIMARY_COLOR,
    borderBottomWidth: .5,
  },
  title: {
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_14,
    color: COLORS.SECONDARY_COLOR,
    letterSpacing: FONTS.SPACING_XS,
    marginBottom: LAYOUT.SPACING_MD_40
  }
})
export default styles
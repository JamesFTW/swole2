import { StyleSheet } from 'react-native'
import { LAYOUT, COLORS, FONTS } from '../../constants'

const styles = StyleSheet.create({
  container: {
    position: LAYOUT.POSITION_ABSOLUTE,
    width: '100%',
  },
  textInput : {
    position: LAYOUT.POSITION_ABSOLUTE,
    marginTop: 26,
  },
  formInput: {
    borderBottomColor: COLORS.PRIMARY_COLOR,
    fontFamily: FONTS.SFPRO_MEDIUM,
    color: COLORS.PRIMARY_COLOR,
    fontSize: FONTS.SIZE_14,
    borderBottomWidth: .5,
    marginLeft: LAYOUT.SPACING_S_24,
    marginRight: LAYOUT.SPACING_S_24,
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
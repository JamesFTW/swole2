import { StyleSheet, Dimensions } from 'react-native'
import { LAYOUT, FONTS, COLORS } from '../../../constants'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    position: LAYOUT.POSITION_ABSOLUTE,
    width: windowWidth,
    backgroundColor: COLORS.WHITE,
    height: '100%',
  },
  title: {
    color: COLORS.WHITE,
    alignSelf: LAYOUT.ALIGN_CENTER,
    marginTop: 113,
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_20,
    letterSpacing: 0.125,
  },
  image: {
    height: windowHeight - 200,
  },
  text: {
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_14,
    alignSelf: LAYOUT.ALIGN_CENTER,
    marginTop: LAYOUT.SPACING_MD_36,
    letterSpacing: 0.125,
    color: COLORS.PRIMARY_COLOR,
  },
  loginText: {
    fontWeight: 'bold',
  },
  welcomeMessageContainer: {
    position: LAYOUT.POSITION_ABSOLUTE,
    bottom: 0,
    left: 0,
    marginLeft: LAYOUT.SPACING_S_24,
    marginBottom: LAYOUT.SPACING_S_24,
  },
  welcomeMessage: {
    marginBottom: LAYOUT.SPACING_S_20,
    fontSize: LAYOUT.SPACING_S_24,
    color: COLORS.WHITE,
    fontFamily: FONTS.SFPRO_MEDIUM,
  },
  welcomeMessageSubText: {
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_16,
    letterSpacing: FONTS.SPACING_S,
    color: COLORS.WHITE,
    width: '80%',
  },
})

export default styles

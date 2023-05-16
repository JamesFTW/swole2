import { StyleSheet, Dimensions } from 'react-native'
import { LAYOUT, FONTS, COLORS } from '../../../constants'

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: windowWidth,
    backgroundColor: COLORS.WHITE,
    height: '100%'
  },
  title: {
    color: COLORS.WHITE,
    marginTop: 113,
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_20,
    letterSpacing: .125
  },
  image: {
    height: windowHeight - 200,
    alignItems: LAYOUT.ALIGN_CENTER, 
  },
  text: {
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_14,
    alignSelf: LAYOUT.ALIGN_CENTER,
    marginTop: LAYOUT.SPACING_MD_36,
    letterSpacing: .125,
    color: COLORS.PRIMARY_COLOR
  },
  loginText: {
    fontWeight: 'bold'
  }
})

export default styles
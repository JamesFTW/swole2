import { StyleSheet, Dimensions } from 'react-native'
import { LAYOUT, FONTS, COLORS } from '../../constants'
const profileImageHeight = Dimensions.get('window').height/2

const styles = StyleSheet.create({
  profile_image: {
    width: null,
    height: profileImageHeight,
  },
  profile_name: {
    color: 'black',
    fontFamily: FONTS.SFPRO_HEAVY,
    fontSize: FONTS.SIZE_24,
    letterSpacing: -.02,
    marginLeft: 16,
    marginTop: 21
  }
})

export default styles
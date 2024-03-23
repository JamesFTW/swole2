import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../constants'

const styles = StyleSheet.create({
  text: {
    fontSize: FONTS.SIZE_14,
    fontFamily: FONTS.SFPRO_MEDIUM,
    color: COLORS.ALERT_COLOR,
    letterSpacing: 0.125,
  },
})

export default styles
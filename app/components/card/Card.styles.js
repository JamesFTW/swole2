import { StyleSheet } from 'react-native'
import { LAYOUT, COLORS } from '../../constants'

const styles = StyleSheet.create({
  card_container: {
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: COLORS.CARD_BOARDER_COLOR,
  },
  card_inner: {
    padding: LAYOUT.SPACING_XS_12,
  },
})

export default styles

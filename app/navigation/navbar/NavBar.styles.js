import { StyleSheet } from 'react-native'
import { COLORS, LAYOUT } from '../../constants'

const styles = StyleSheet.create({
  navBar_container: {
    height: LAYOUT.SPACING_XL_72, 
    borderTopColor: COLORS.CARD_BOARDER_COLOR, 
    borderTopWidth: 1,
    backgroundColor: COLORS.WHITE_WHITE
  },
  navBar_icon_container: {
    marginLeft: LAYOUT.SPACING_MD_52,
    marginRight: LAYOUT.SPACING_LG_60,
    justifyContent: 'space-between'
  }
})

export default styles

import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

const styles = StyleSheet.create({
  navBar_container: {
    height: 72, 
    borderTopColor: COLORS.CARD_BOARDER_COLOR, 
    borderTopWidth: 1 
  },
  navBar_icon_container: {
    marginLeft: 52,
    marginRight: 60,
    justifyContent: 'space-between'
  }
})

export default styles

import { StyleSheet } from 'react-native';
import { COLORS, LAYOUT } from '../../constants'

const styles = StyleSheet.create({
  day_of_week_indicator_completed: {
    height: LAYOUT.SPACING_S_20 , 
    width: LAYOUT.SPACING_S_20 , 
    borderRadius: 10, 
    backgroundColor: COLORS.BACKGROUND_COLOR, 
    alignItems: LAYOUT.ALIGN_CENTER, 
    justifyContent: LAYOUT.ALIGN_CENTER, 
    borderColor: COLORS.SUCCESS_BLUE, 
    borderWidth: 1
  },
  day_of_week_indicator: {
    height: LAYOUT.SPACING_S_20,
    width: LAYOUT.SPACING_S_20,
    borderRadius: 10,
    backgroundColor: COLORS.LIGHT_GRAY
  },
})

export default styles
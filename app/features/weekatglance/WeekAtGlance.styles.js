import { StyleSheet } from 'react-native';
import { FONTS, COLORS, LAYOUT } from '../../constants'

const styles = StyleSheet.create({
	week_subtitle: {
		fontFamily: FONTS.SFPRO_MEDIUM,
		fontSize: FONTS.SIZE_14,
		letterSpacing: FONTS.SPACING_XS,
		color: COLORS.PRIMARY_COLOR,
    marginTop: LAYOUT.SPACING_XS_4,
    marginLeft: LAYOUT.SPACING_XS_4
    
	},
  show_more_training_subtitle: {
    fontFamily: FONTS.SFPRO_MEDIUM,
		fontSize: FONTS.SIZE_12,
		letterSpacing: FONTS.SPACING_M,
		color: COLORS.PRIMARY_COLOR,
    marginTop: 'auto',
    marginLeft: 'auto',
    marginBottom: LAYOUT.SPACING_XS_4,
    marginRight: LAYOUT.SPACING_XS_4
  },
  week_at_glance_subtitle: {
    width: '100%'
  },
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
  day_of_week_container: {
    marginTop: LAYOUT.SPACING_MD_36, 
    alignItems: LAYOUT.ALIGN_CENTER
  },
  day_of_week_text: {
    fontFamily: FONTS.SFPRO_MEDIUM,
		fontSize: FONTS.SIZE_14,
		letterSpacing: FONTS.SPACING_S,
		color: COLORS.SECONDARY_COLOR,
    marginTop: LAYOUT.SPACING_MD_36
  },
  current_day_text_boarder: {
    position: LAYOUT.POSITION_ABSOLUTE,
    height: 30, 
    width: 30, 
    backgroundColor: 'white', 
    borderColor: '#28B42C', 
    borderWidth: 1, 
    borderRadius: 16, 
    marginTop: LAYOUT.SPACING_MD_48,
  },
  current_day_text: {
    fontFamily: FONTS.SFPRO_HEAVY,
    lineHeight: 30,
    alignSelf: 'center',
		fontSize: FONTS.SIZE_14,
    color: '#28B42C'
  },
  week_at_glance_underline: { 
    borderWidth: 1, 
    bottom: 0, 
    marginBottom: LAYOUT.SPACING_MD_48, 
    borderColor: COLORS.CARD_BOARDER_COLOR, 
    width: '110%',  
    position: LAYOUT.POSITION_ABSOLUTE
  }
})

export default styles
import { StyleSheet } from 'react-native';
import { FONTS, COLORS, LAYOUT } from '../../constants'

const styles = StyleSheet.create({
	exercise_title: {
		fontFamily: FONTS.SFPRO_REGULAR,
		fontSize: FONTS.SIZE_16,
		color: COLORS.PRIMARY_COLOR,
		letterSpacing: FONTS.SPACING_S,
		marginLeft: LAYOUT.SPACING_XS_16,
		marginTop: 5
	},
	exercise_subtitle: {
		fontFamily: FONTS.SFPRO_REGULAR,
		fontSize: FONTS.SIZE_16,
		letterSpacing: FONTS.SPACING_S,
		color: COLORS.SUBTITLE_GRAY,
	},
	sets_header: {
		fontFamily: FONTS.SFPRO_MEDIUM,
		fontSize: FONTS.SIZE_14,
		color: COLORS.PRIMARY_COLOR,
		letterSpacing: .01
	},
	set_info: {
		fontFamily: FONTS.SFPRO_REGULAR,
		fontSize: FONTS.SIZE_16,
		color: COLORS.SECONDARY_COLOR,
		letterSpacing: FONTS.SPACING_S,
		marginRight: 35,
		width: 40,
		textAlign: 'center',
		right: 12
	}
})

export default styles

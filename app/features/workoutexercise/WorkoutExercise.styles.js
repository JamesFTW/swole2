import { StyleSheet } from 'react-native';
import { FONTS, COLORS, LAYOUT } from '../../constants'

const styles = StyleSheet.create({
	exercise_title: {
		fontFamily: FONTS.SFPRO_REGULAR,
		fontSize: FONTS.SIZE_16,
		color: COLORS.PRIMARY_COLOR,
		letterSpacing: FONTS.SPACING_S,
		marginLeft: LAYOUT.SPACING_S_20,
		marginTop: 5
	},
	exercise_subtitle: {
		fontFamily: FONTS.SFPRO_REGULAR,
		fontSize: FONTS.SIZE_16,
		letterSpacing: FONTS.SPACING_S,
		color: COLORS.SUBTITLE_GRAY,
	}
})

export default styles
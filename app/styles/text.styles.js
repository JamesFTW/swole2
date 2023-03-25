
import { StyleSheet } from 'react-native';
import { FONTS, COLORS } from '../constants'

const fontStyles = StyleSheet.create({
	header_title: {
		fontFamily: FONTS.SFPRO_HEAVY,
		fontSize: FONTS.SIZE_24,
		color: COLORS.PRIMARY_COLOR,
		letterSpacing: -.02,
	},
	exercise_title: {
		fontFamily: FONTS.SFPRO_REGULAR,
		fontSize: FONTS.SIZE_20,
		color: COLORS.PRIMARY_COLOR,
		letterSpacing: FONTS.SPACING_S
	},
	exercise_subtitle: {
		fontFamily: FONTS.SFPRO_REGULAR,
		fontSize: FONTS.SIZE_16,
		letterSpacing: FONTS.SPACING_S,
		color: COLORS.SUBTITLE_GRAY
	}
})

export default fontStyles

// export const CONSTANTS = {
// 	titleText: {
// 		fontFamily: 'SFProText-Heavy',
// 		fontSize: 24,
// 		color: COLORS.subtitle_gray,
// 		letterSpacing: -.02,
// 	},
// 		titleTextDark: {
// 		fontFamily: 'SFProText-Heavy',
// 		fontSize: 24,
// 		color: COLORS.dark_blue,
// 		letterSpacing: -.02,
// 	},
// 	secondaryTitleText: {
// 		fontFamily: 'SFProText-Regular',
// 		fontSize: 20,
// 		color: COLORS.dark_blue,
// 		letterSpacing: .15,
// 	},
// 	regularText: {
// 		fontFamily: 'SFProText-Medium',
// 		fontSize: 14,
// 		// color: color,
// 		letterSpacing: .01,
// 	},
// 	lightTitleText: {
// 		fontFamily: 'SFProText-Light',
// 		fontSize: 24,
// 		// color: color,
// 		letterSpacing: -.02,
// 	},
// 	lightAccentTitle: {
// 		fontFamily: 'SFProText-Light',
// 		fontSize: 12,
// 		// color: color,
// 		letterSpacing: -.02,
// 	},
// 		regularAccentTitle: {
// 		fontFamily: 'SFProText-Regular',
// 		fontSize: 12,
// 		color: COLORS.light_blue,
// 		letterSpacing: -.02,
// 	},
// 	subTitle: {
// 		fontFamily: 'SFProText-Regular',
// 		fontSize: 14,
// 		color: COLORS.subtitle_gray,
// 		letterSpacing: -.1,
// 	},
// 	subTitle2: {
// 		fontFamily: 'SFProText-Regular',
// 		fontSize: 16,
// 		color: COLORS.dark_blue,
// 		letterSpacing: .15,
// 		lineHeight: 19.4
// 	},
// }
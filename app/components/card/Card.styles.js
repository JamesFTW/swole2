import { StyleSheet } from 'react-native'
import { LAYOUT, COLORS } from '../../constants'

const styles = StyleSheet.create({
	card: {
		alignSelf: 'stretch',
		borderWidth: 1,
		borderColor: COLORS.CARD_BOARDER_COLOR,
		backgroundColor: COLORS.WHITE,
		borderRadius: LAYOUT.SPACING_XS_12,
		marginLeft: LAYOUT.SPACING_XS_8,
		marginRight: LAYOUT.SPACING_XS_8,

	},
	card_inner: {
		padding: LAYOUT.SPACING_XS_12,
		height: LAYOUT.SPACING_XL_76,
	}
});

export default styles
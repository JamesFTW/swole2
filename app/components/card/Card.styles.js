import { StyleSheet } from 'react-native'
import LAYOUT from '../../constants/layout'

const styles = StyleSheet.create({
	card: {
		alignSelf: 'stretch',
		borderRadius: LAYOUT.SPACING_XS_12,
		borderWidth: 1,
		borderColor: 'rgba(52, 52, 52, .1)',
		backgroundColor: 'white',
		marginLeft: LAYOUT.SPACING_XS_8,
		marginRight: LAYOUT.SPACING_XS_8,

	},
	card_inner: {
		padding: LAYOUT.SPACING_XS_12,
		height: LAYOUT.SPACING_XXL_CARD,
	}
});

export default styles
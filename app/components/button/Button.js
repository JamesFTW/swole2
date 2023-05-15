import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { COLORS, FONTS, LAYOUT } from '../../constants'
import { FlexContainer } from '../../layout'

export function Button(props) {
	const { 
		onPress,
		title,
		icon,
		outline
	} = props

	if (outline) {
		return (
			<TouchableOpacity style={styles.button} onPress={onPress}>
				<FlexContainer alignItems="center" direction='row'>
					{ icon }
					<Text style={styles.text}>{ title }</Text>
				</FlexContainer>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: COLORS.WHITE,
		justifyContent: LAYOUT.ALIGN_CENTER,
		borderColor: COLORS.PRIMARY_COLOR,
		borderWidth: 1,
		height: LAYOUT.SPACING_MD_48,
		borderRadius: 10,
		marginLeft: LAYOUT.SPACING_S_20,
		marginRight: LAYOUT.SPACING_S_20,
	},
	text: {
		fontSize: FONTS.SIZE_16,
		fontFamily: FONTS.SFPRO_MEDIUM,
		color: COLORS.PRIMARY_COLOR,
		justifyContent: LAYOUT.ALIGN_CENTER,
		alignItems: LAYOUT.ALIGN_CENTER,
		lineHeight: LAYOUT.SPACING_MD_48,
		marginLeft: LAYOUT.SPACING_LG_64
  },
	email_icon: {
		marginLeft: LAYOUT.SPACING_XS_16
	}
});
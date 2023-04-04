import * as React from 'react'
import { FlexContainer } from '../../layout'
import { LAYOUT } from '../../constants'
import { Action } from '../action/Action'
import { Text } from 'react-native'

export function ActionGroup({
	titles,
	marginLeft,
	marginRight,
	marginTop,
	marginBottom
}) {

	if (titles) {
		return (
			<FlexContainer
				marginLeft={marginLeft}
				marginTop={marginTop}
				marginRight={marginRight}
				marginBottom={marginBottom}
				direction="row"
			>
				{titles.map(title => {
					return (
						<Action
							key={title}
							marginRight={LAYOUT.SPACING_XS_4}
							actionTitle={title}
						/>
					)
				})
				}
			</FlexContainer>
		)
	} else {
		return <Text>hfdfds</Text>
	}
}
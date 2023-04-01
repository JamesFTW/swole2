import * as React from 'react'
import { FlexContainer } from '../../layout'
import { LAYOUT } from '../../constants'
import { Action } from '../action/Action'

export function ActionGroup({
	titles
}) {
	return (
		<FlexContainer direction="row">
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
}
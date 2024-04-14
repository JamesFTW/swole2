import * as React from 'react'
import { FlexContainer } from '../../layout'
import { LAYOUT } from '../../constants'
import { Action } from '../action/Action'

export function ActionGroup({
  actionTitles,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
}) {
  if (actionTitles) {
    return (
      <FlexContainer
        marginLeft={marginLeft}
        marginTop={marginTop}
        marginRight={marginRight}
        marginBottom={marginBottom}
        direction="row">
        {actionTitles.map(title => {
          return (
            <Action
              key={title}
              marginRight={LAYOUT.SPACING_XS_4}
              actionTitle={title}
            />
          )
        })}
      </FlexContainer>
    )
  }
}

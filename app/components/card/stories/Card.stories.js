import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { Card } from '../Card'
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import { withKnobs } from '@storybook/addon-ondevice-knobs'

import { CenterDecorator } from '../../../../storybook/CenterDecorator'

export default storiesOf('Card', module)
  .addDecorator(CenterDecorator)
  .addDecorator(withBackgrounds)
  .addDecorator(withKnobs)
  .addParameters({
    backgrounds: [
      { name: 'dark', value: '#F8F9FB', default: true },
      { name: 'light', value: '#eeeeee' },
    ],
  })
  .add('default', () => <Card onPress={action('tapped-default')} />)

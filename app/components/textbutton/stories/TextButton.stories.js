import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { TextButton } from '../TextButton'

export default storiesOf('TextButton', module).add('default', () => (
  <TextButton onPress={action('tapped-default')}> Back </TextButton>
))

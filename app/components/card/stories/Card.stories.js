import React from 'react';
import {storiesOf, addParameters, addDecorator} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {Card} from '../Card';
import {StyleSheet, View, Text, Image} from 'react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { withKnobs } from '@storybook/addon-ondevice-knobs';
import styles from '../../../styles/image.styles'

const placeHolder = 'https://cdn.shopify.com/s/files/1/1876/4703/articles/shutterstock_1079398565_2560x.jpg?v=1591108584'

//react aria has usebutton hook for props

// addDecorator(withBackgrounds)
// addDecorator(withKnobs)

const CenterDecorator = storyFn => (
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       }}>
      {
				storyFn()
			}
    </View>
  );


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
	.add("default", () => (
		<Card onPress={action('tapped-default')} />
 ))

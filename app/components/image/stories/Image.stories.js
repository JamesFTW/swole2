import * as React from 'react'
import {storiesOf } from '@storybook/react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { withKnobs } from '@storybook/addon-ondevice-knobs';
import { Image } from '../Image'
import { CenterDecorator } from '../../../../storybook/CenterDecorator'

const placeHolder = 'https://cdn.shopify.com/s/files/1/1876/4703/articles/shutterstock_1079398565_2560x.jpg?v=1591108584'

export default storiesOf('Image', module)
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
		<Image src={placeHolder} height={50} width={50}/>
 )) 
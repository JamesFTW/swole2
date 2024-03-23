import React from "react"
import { storiesOf } from "@storybook/react-native"
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import { withKnobs } from '@storybook/addon-ondevice-knobs'
import { ActionGroup } from "../ActionGroup"
import { CenterDecorator } from '../../../../storybook/CenterDecorator'

const titles = [
  'chest',
  'back'
]

const titles1 = [
  'chest',
]

export default storiesOf('ActionGroup', module)
  .addDecorator(CenterDecorator)
	.addDecorator(withBackgrounds)
	.addDecorator(withKnobs)
	.addParameters({
		backgrounds: [
			{ name: 'dark', value: '#F8F9FB', default: true },
			{ name: 'light', value: '#eeeeee' },
		],
	})
  .add("Multiple", () => (
    <ActionGroup actionTitles={titles} />
  ))
  .add("Single", () => (
    <ActionGroup actionTitles={titles1} />
  ))
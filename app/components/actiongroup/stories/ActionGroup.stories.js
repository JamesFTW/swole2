import React from "react";
import { storiesOf } from "@storybook/react-native"
import { Card } from "../../card/Card";
import { View } from 'react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { withKnobs } from '@storybook/addon-ondevice-knobs';
import { ActionGroup } from "../ActionGroup";

//react aria has usebutton hook for props

const CenterDecorator = storyFn => (
  <View style={{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  }}>
    {
      storyFn()
    }
  </View>
);


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
    <ActionGroup titles={titles} />
  ))
  .add("Single", () => (
    <ActionGroup titles={titles1} />
  ))
import React from 'react';
import {storiesOf, addParameters, addDecorator} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import { Exercise } from '../Exercise';
import { View } from 'react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { withKnobs } from '@storybook/addon-ondevice-knobs';

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


export default storiesOf('Exercise', module)
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
		<Exercise 
			sets={4} 
			reps={10} 
			weight={225} 
			exerciseTitle="Bulgarian Split Squat"  
		/>
 ))
 

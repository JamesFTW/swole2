import React from 'react';
import {storiesOf } from '@storybook/react-native';
import { WorkoutExercise } from '../WorkoutExercise';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { withKnobs } from '@storybook/addon-ondevice-knobs';
import { CenterDecorator } from '../../../../storybook/CenterDecorator'

export default storiesOf('WorkoutExercise', module)
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
		<WorkoutExercise 
			sets={4} 
			reps={10} 
			weight={225} 
			exerciseTitle="Bulgarian Split Squat"  
		/>
 ))
 

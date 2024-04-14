import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { CardGroup } from '../CardGroup'
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import { withKnobs } from '@storybook/addon-ondevice-knobs'
import { WorkoutExercise } from '../../../features/workoutexercise/WorkoutExercise'

export default storiesOf('CardGroup', module)
  .addDecorator(withBackgrounds)
  .addDecorator(withKnobs)
  .addParameters({
    backgrounds: [
      { name: 'dark', value: '#F8F9FB', default: true },
      { name: 'light', value: '#eeeeee' },
    ],
  })
  .add('default group with multiple cards', () => (
    <CardGroup onPress={action('tapped-default')}>
      <WorkoutExercise
        sets={4}
        reps={10}
        weight={225}
        exerciseTitle="Bulgarian Split Squat"
      />
      <WorkoutExercise
        sets={4}
        reps={10}
        weight={225}
        exerciseTitle="Bulgarian Split Squat"
      />
      <WorkoutExercise
        sets={4}
        reps={10}
        weight={225}
        exerciseTitle="Bulgarian Split Squat"
      />
      <WorkoutExercise
        sets={4}
        reps={10}
        weight={225}
        exerciseTitle="Bulgarian Split Squat"
      />
    </CardGroup>
  ))
  .add('single card', () => (
    <CardGroup onPress={action('tapped-default')}>
      <WorkoutExercise
        sets={4}
        reps={10}
        weight={225}
        exerciseTitle="Bulgarian Split Squat"
      />
    </CardGroup>
  ))

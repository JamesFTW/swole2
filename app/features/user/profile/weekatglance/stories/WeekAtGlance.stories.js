import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { WeekAtGlance } from '../WeekAtGlance'
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import { withKnobs } from '@storybook/addon-ondevice-knobs'
import { CenterDecorator } from '../../../../../../storybook/CenterDecorator'

const weeklyStatus1 = {
  Monday: { date: '2023-06-05', workoutCompleted: false },
  Tuesday: { date: '2023-06-06', workoutCompleted: false },
  Wednesday: { date: '2023-06-07', workoutCompleted: false },
  Thursday: { date: '2023-06-08', workoutCompleted: false },
  Friday: { date: '2023-06-09', workoutCompleted: false },
  Saturday: { date: '2023-06-10', workoutCompleted: false },
  Sunday: { date: '2023-06-11', workoutCompleted: false },
}

const weeklyStatus2 = {
  Monday: { date: '2023-06-05', workoutCompleted: true },
  Tuesday: { date: '2023-06-06', workoutCompleted: true },
  Wednesday: { date: '2023-06-07', workoutCompleted: false },
  Thursday: { date: '2023-06-08', workoutCompleted: true },
  Friday: { date: '2023-06-09', workoutCompleted: false },
  Saturday: { date: '2023-06-10', workoutCompleted: false },
  Sunday: { date: '2023-06-11', workoutCompleted: false },
}

export default storiesOf('WeekAtGlance', module)
  .addDecorator(CenterDecorator)
  .addDecorator(withBackgrounds)
  .addDecorator(withKnobs)
  .addParameters({
    backgrounds: [
      { name: 'dark', value: '#F8F9FB', default: true },
      { name: 'light', value: '#eeeeee' },
    ],
  })
  .add('No workouts completed', () => (
    <WeekAtGlance weeklyStatus={weeklyStatus1} />
  ))
  .add('Workouts completed', () => (
    <WeekAtGlance weeklyStatus={weeklyStatus2} />
  ))

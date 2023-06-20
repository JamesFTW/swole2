import React from 'react'
import { render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { WeekAtGlance } from '../WeekAtGlance'

jest.mock('../../../assets/icons', () => ({
  Checkmark: () => null, // Mock the Checkmark component
}))

describe('WeekAtGlance', () => {
  beforeAll(() => {
    jest.spyOn(global.console, 'error').mockImplementation(() => {})
  })

  afterAll(() => {
    global.console.error.mockRestore()
  })

  const mockWorkoutInfo = {
    Monday: {
      workoutCompleted: false,
      workoutId: 1,
    },
    Tuesday: {
      workoutCompleted: true,
      workoutId: 2,
    },
  }

  it('renders the WeekAtGlance component', () => {
    const { getByText } = render(
      <NavigationContainer>
        <WeekAtGlance weeklyStatus={mockWorkoutInfo} />
      </NavigationContainer>
    )

    const weekSubtitle = getByText('This Week')
    const showMoreSubtitle = getByText('See more of your training')

    expect(weekSubtitle).toBeDefined()
    expect(showMoreSubtitle).toBeDefined()
  })
})
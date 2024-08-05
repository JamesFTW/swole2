import React from 'react'
import { render, act, fireEvent } from '@testing-library/react-native'
import { Calendar } from '../Calendar'
import { getLocalDateString } from '@app/utils/dateTimeUtil'

// Mock the getLocalDateString function
jest.mock('@app/utils/dateTimeUtil', () => ({
  getLocalDateString: jest.fn(),
}))

// Mock the StartNewWorkoutIcon component
jest.mock('@assets/icons', () => ({
  StartNewWorkout: () => <div testID="start-new-workout-icon">StartNewWorkoutIcon</div>,
}))

// Mock react-native-calendars
jest.mock('react-native-calendars', () => ({
  Calendar: ({ current, renderHeader }) => {
    // This mock implementation calls renderHeader with the current month
    const headerContent = renderHeader({ month: new Date(current).getMonth() })
    return (
      <>
        {headerContent}
        <div>MockedCalendar</div>
      </>
    )
  },
}))

describe('Calendar Component', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  test('displays correct month', () => {
    const mockDate = new Date(2023, 7, 15) // August 15, 2023
    jest.setSystemTime(mockDate)
    getLocalDateString.mockReturnValue('2023-08-15')

    const { getByText } = render(
      <Calendar onDayPress={() => {}} selectedDate="2023-08-15" onAddWorkoutPress={() => {}} />,
    )

    expect(getByText('August')).toBeTruthy()
  })

  test('switches month correctly at the end of the month', () => {
    // Start with July 31, 2023 at 23:59
    const startDate = new Date(2023, 6, 31, 23, 59)
    jest.setSystemTime(startDate)
    getLocalDateString.mockReturnValue('2023-07-31')

    const { getByText, rerender } = render(
      <Calendar onDayPress={() => {}} selectedDate="2023-07-31" onAddWorkoutPress={() => {}} />,
    )

    expect(getByText('July')).toBeTruthy()

    // Advance time to August 1, 2023 at 00:01
    act(() => {
      jest.advanceTimersByTime(2 * 60 * 1000) // Advance by 2 minutes
      const newDate = new Date(2023, 7, 1, 0, 1)
      jest.setSystemTime(newDate)
      getLocalDateString.mockReturnValue('2023-08-01')
    })

    // Force a re-render
    rerender(<Calendar onDayPress={() => {}} selectedDate="2023-08-01" onAddWorkoutPress={() => {}} />)

    expect(getByText('August')).toBeTruthy()
  })

  test('calls onAddWorkoutPress when add workout icon is pressed', () => {
    const onAddWorkoutPressMock = jest.fn()
    const { getByTestId } = render(
      <Calendar onDayPress={() => {}} selectedDate="2023-08-15" onAddWorkoutPress={onAddWorkoutPressMock} />,
    )

    const addWorkoutButton = getByTestId('start-new-workout-icon')
    fireEvent.press(addWorkoutButton)

    expect(onAddWorkoutPressMock).toHaveBeenCalledTimes(1)
  })
})

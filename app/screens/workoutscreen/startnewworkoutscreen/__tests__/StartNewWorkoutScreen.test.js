import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, fireEvent } from '@testing-library/react-native'
import { renderHook, act } from '@testing-library/react-hooks'

import { StartNewWorkoutScreen } from '../StartNewWorkoutScreen'
import { StartNewWorkoutStackRoute } from '../index'
import { useSubmitUserExercises } from '../../../../lib/users/userexercises/hooks'

// mocks
const mutateMock = jest.fn()
const onSuccessMock = jest.fn()

useSubmitUserExercises.mockReturnValue({
  mutate: mutateMock,
  onSuccess: onSuccessMock,
})

jest.mock('../../../../lib/users/userexercises/hooks', () => ({
  useSubmitUserExercises: jest.fn(),
}))

jest.mock('../../../../lib/users/hooks', () => ({
  useGetUserId: jest.fn().mockReturnValue({
    mutate: jest.fn(),
    isSuccess: true,
    userId: this.userId,
  }),
}))

describe('StartNewWorkoutScreen', () => {
  const handleSubmit = jest.fn()
  let navigation, queryClient

  beforeEach(() => {
    queryClient = new QueryClient()
    navigation = jest.fn()
  })

  afterEach(() => {
    queryClient.clear()
  })

  const renderWithClient = ui => {
    return render(
      <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
    )
  }

  test('should call the custom hook and handler function when the button is pressed', () => {
    const { getByTestId } = renderWithClient(
      <StartNewWorkoutScreen
        navigation={navigation}
        route={StartNewWorkoutStackRoute}
      />,
    )
    // TODO: Get this working, no idea how to even select/ render things properly in Native
    const submitButton = getByTestId('submit-workout-button')

    fireEvent.press(submitButton)

    expect(useSubmitUserExercises).toHaveBeenCalled()
    expect(handleSubmit).toHaveBeenCalled()
  })
})

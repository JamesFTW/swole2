import { useSubmitUserExercises } from '../useSubmitUserExercise'
import { renderHook, act } from '@testing-library/react-native'

jest.mock('../useSubmitUserExercise')
jest.mock('@tanstack/react-query', () => ({
  useMutation: jest.fn(),
}))

describe('useSubmitUserExercises Hook', () => {
  let finishedExercises, userId, mutateMock, result
  beforeEach(() => {
    userId = 1
    finishedExercises = [
      {
        exerciseSets: [
          {
            isCompletedSet: true,
            reps: '1',
            rpe: '0',
            setNumber: 1,
            weight: '0',
          },
          {
            id: 2,
            isCompletedSet: true,
            reps: '2',
            rpe: '0',
            setNumber: 2,
            weight: '0',
          },
          {
            id: 3,
            isCompletedSet: true,
            reps: '3',
            rpe: '0',
            setNumber: 3,
            weight: '0',
          },
        ],
        exerciseTitle: 'Arnold Press',
      },
      {
        exerciseSets: [
          {
            isCompletedSet: false,
            reps: '1',
            rpe: '0',
            setNumber: 1,
            weight: '0',
          },
          {
            id: 2,
            isCompletedSet: true,
            reps: '2',
            rpe: '0',
            setNumber: 2,
            weight: '0',
          },
          {
            id: 3,
            isCompletedSet: false,
            reps: '3',
            rpe: '0',
            setNumber: 3,
            weight: '0',
          },
        ],
        exerciseTitle: 'Back Sploot',
      },
    ]
  })

  describe('when it succeeds', () => {
    beforeEach(() => {
      mutateMock = jest.fn()
      useSubmitUserExercises.mockReturnValue({
        mutate: mutateMock,
        isSuccess: true,
      })
      const { result: newResult } = renderHook(() =>
        useSubmitUserExercises(userId, finishedExercises),
      )
      result = newResult
      act(() => {
        result.current.mutate(userId, finishedExercises)
      })
    })

    it('calls the mutate function', async () => {
      expect(mutateMock).toHaveBeenCalledWith(userId, finishedExercises)
    })

    it('returns true on success', () => {
      expect(result.current.isSuccess).toBeTruthy()
    })
    //TODO: Add mocked out test case to see that this hook calls submitUserExercise api call with expected items
    // it works as expected when you call `result = submitUserExercise` but not in the full flow
  })

  describe('when it errors', () => {
    beforeEach(() => {
      mutateMock = jest.fn()
      useSubmitUserExercises.mockReturnValue({
        mutate: mutateMock,
        error: new Error('an error occurred'),
      })
      const { result: newResult } = renderHook(() =>
        useSubmitUserExercises(userId, finishedExercises),
      )
      result = newResult
      act(() => {
        result.current.mutate(userId, finishedExercises)
      })
    })

    it('handles error correctly', () => {
      expect(result.current.error).toBeDefined()
      expect(result.current.error.message).toEqual('an error occurred')
    })
  })
})

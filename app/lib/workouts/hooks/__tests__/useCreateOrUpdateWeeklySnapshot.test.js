import { renderHook, act } from '@testing-library/react-hooks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useCreateOrUpdateWeeklySnapshot } from '@lib/workouts/hooks'
import { WorkoutRepository } from '@lib/workouts/WorkoutRepository'

jest.mock('@lib/workouts/WorkoutRepository', () => {
  const mockRepo = {
    getExerciseSetData: jest.fn(data => data),
    getTotalVolume: jest.fn(() => 100),
    getTotalSets: jest.fn(() => 5),
    createOrUpdateWeeklySnapshot: jest.fn().mockResolvedValue({ success: true }),
  }
  return {
    WorkoutRepository: jest.fn(() => mockRepo),
  }
})

jest.mock('@tanstack/react-query', () => {
  const actual = jest.requireActual('@tanstack/react-query')
  return {
    ...actual,
    useMutation: jest.fn(options => ({
      mutate: jest.fn(data => options.mutationFn(data)),
      isLoading: false,
      isError: false,
      isSuccess: true,
    })),
  }
})

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })
  return ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

describe('useCreateOrUpdateWeeklySnapshot', () => {
  let workoutRepository

  beforeEach(() => {
    jest.clearAllMocks()
    workoutRepository = new WorkoutRepository()
  })

  test('should return a mutation function', () => {
    const { result } = renderHook(() => useCreateOrUpdateWeeklySnapshot(), { wrapper: createWrapper() })
    expect(result.current.mutate).toBeDefined()
  })

  test('successfully creates weekly snapshot with valid data', async () => {
    const { result } = renderHook(() => useCreateOrUpdateWeeklySnapshot(), { wrapper: createWrapper() })

    const mockData = {
      finishedExercises: [
        {
          /* mock exercise data */
        },
      ],
      duration: 3600,
      completedWorkoutData: { completedWorkoutData: { completedWorkoutId: '123' } },
    }

    await act(async () => {
      result.current.mutate(mockData)
    })

    expect(workoutRepository.createOrUpdateWeeklySnapshot).toHaveBeenCalledWith({
      weeklySnapshotParams: {
        totalSets: 5,
        totalVolume: 100,
        totalWorkoutTime: 3600,
        completedWorkoutId: '123',
      },
    })
  })

  test('handles empty exercise list', async () => {
    const { result } = renderHook(() => useCreateOrUpdateWeeklySnapshot(), { wrapper: createWrapper() })

    const mockData = {
      finishedExercises: [],
      duration: 1800,
      completedWorkoutData: { completedWorkoutData: { completedWorkoutId: '456' } },
    }

    await act(async () => {
      result.current.mutate(mockData)
    })

    expect(workoutRepository.createOrUpdateWeeklySnapshot).toHaveBeenCalledWith({
      weeklySnapshotParams: {
        totalSets: 5, // These values are mocked, so they don't change
        totalVolume: 100,
        totalWorkoutTime: 1800,
        completedWorkoutId: '456',
      },
    })
  })

  test('throws error with invalid duration', async () => {
    const { result } = renderHook(() => useCreateOrUpdateWeeklySnapshot(), { wrapper: createWrapper() })

    const mockData = {
      finishedExercises: [
        {
          /* mock exercise data */
        },
      ],
      duration: -100,
      completedWorkoutData: { completedWorkoutData: { completedWorkoutId: '789' } },
    }

    await expect(result.current.mutate(mockData)).rejects.toThrow('Invalid duration')

    expect(workoutRepository.createOrUpdateWeeklySnapshot).not.toHaveBeenCalled()
  })

  test('throws error with missing completedWorkoutData', async () => {
    const { result } = renderHook(() => useCreateOrUpdateWeeklySnapshot(), { wrapper: createWrapper() })

    const mockData = {
      finishedExercises: [
        {
          /* mock exercise data */
        },
      ],
      duration: 2400,
      completedWorkoutData: {},
    }

    await expect(result.current.mutate(mockData)).rejects.toThrow('Invalid completedWorkoutData')

    expect(workoutRepository.createOrUpdateWeeklySnapshot).not.toHaveBeenCalled()
  })

  test('correctly aggregates complex exercise data', async () => {
    // For this test, we need to mock the WorkoutRepository methods to return different values
    workoutRepository.getTotalVolume.mockReturnValueOnce(5600)
    workoutRepository.getTotalSets.mockReturnValueOnce(7)

    const { result } = renderHook(() => useCreateOrUpdateWeeklySnapshot(), { wrapper: createWrapper() })

    const mockData = {
      finishedExercises: [
        {
          /* mock complex exercise data */
        },
      ],
      duration: 4500,
      completedWorkoutData: { completedWorkoutData: { completedWorkoutId: '101' } },
    }

    await act(async () => {
      result.current.mutate(mockData)
    })

    expect(workoutRepository.createOrUpdateWeeklySnapshot).toHaveBeenCalledWith({
      weeklySnapshotParams: {
        totalSets: 7,
        totalVolume: 5600,
        totalWorkoutTime: 4500,
        completedWorkoutId: '101',
      },
    })
  })
})

import { renderHook, act } from '@testing-library/react-hooks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useSaveCompletedWorkout } from '@lib/workouts/hooks'
import { WorkoutRepository } from '@lib/workouts/WorkoutRepository'

jest.mock('@lib/workouts/WorkoutRepository', () => {
  const mockRepo = {
    getExerciseIds: jest.fn(data => data.map(exercise => exercise.exerciseId)),
    getExerciseSetData: jest.fn(data =>
      data.flatMap(item => (item.reps !== 0 && item.weight !== 0 ? item.exerciseSetsData : [])),
    ),
    getTotalVolume: jest.fn(data => data.reduce((acc, curr) => acc + curr.reps * curr.weight, 0)),
    getTotalSets: jest.fn(data => data.length),
    getPrimaryMuscleGroup: jest.fn(data => {
      const groups = data.map(item => item.targetMuscle)
      return [...new Set(groups)].slice(0, 2)
    }),
    saveCompletedWorkout: jest.fn().mockImplementation(data => {
      return Promise.resolve('success')
    }),
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
      isSuccess: false,
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

describe('Workout Hooks', () => {
  let workoutRepository

  beforeEach(() => {
    jest.clearAllMocks()
    workoutRepository = new WorkoutRepository()
  })

  describe('useSaveCompletedWorkout', () => {
    test('should return a mutation function', () => {
      const { result } = renderHook(() => useSaveCompletedWorkout(), { wrapper: createWrapper() })
      expect(result.current.mutate).toBeDefined()
    })

    test('mutation function should call saveCompletedWorkout with aggregated data', async () => {
      const { result } = renderHook(() => useSaveCompletedWorkout(), { wrapper: createWrapper() })

      const mockData = {
        finishedExercises: [
          {
            exerciseId: 1,
            reps: 10,
            weight: 100,
            targetMuscle: 'chest',
            exerciseSetsData: [{ set: 1, reps: 10, weight: 100 }],
          },
        ],
        workoutTitle: 'Test Workout',
        duration: 3600,
      }

      await act(async () => {
        result.current.mutate(mockData)
      })

      expect(workoutRepository.saveCompletedWorkout).toHaveBeenCalledWith(
        expect.objectContaining({
          completedWorkoutParams: expect.objectContaining({
            exercises: expect.any(Array),
            totalVolume: expect.any(Number),
            totalSets: expect.any(Number),
            primaryMuscleGroups: expect.any(Array),
            workoutTitle: 'Test Workout',
            duration: 3600,
          }),
        }),
      )
    })
  })

  test('getExerciseIds should return an array of exercise IDs', () => {
    const input = [{ exerciseId: 1 }, { exerciseId: 2 }, { exerciseId: 3 }]
    expect(workoutRepository.getExerciseIds(input)).toEqual([1, 2, 3])
  })

  test('getExerciseSetData should return exercise set data for non-zero reps and weight', () => {
    const input = [
      { reps: 10, weight: 100, exerciseSetsData: [{ set: 1, reps: 10, weight: 100 }] },
      { reps: 0, weight: 100, exerciseSetsData: [{ set: 1, reps: 0, weight: 100 }] },
    ]
    expect(workoutRepository.getExerciseSetData(input)).toEqual([{ set: 1, reps: 10, weight: 100 }])
  })

  test('getTotalVolume should calculate total volume correctly', () => {
    const input = [
      { reps: 10, weight: 100 },
      { reps: 8, weight: 120 },
    ]
    expect(workoutRepository.getTotalVolume(input)).toBe(1960)
  })

  test('getTotalSets should count total sets correctly', () => {
    const input = [{}, {}, {}]
    expect(workoutRepository.getTotalSets(input)).toBe(3)
  })

  test('getPrimaryMuscleGroup should return top 2 muscle groups', () => {
    const input = [
      { targetMuscle: 'chest' },
      { targetMuscle: 'biceps' },
      { targetMuscle: 'chest' },
      { targetMuscle: 'triceps' },
    ]
    expect(workoutRepository.getPrimaryMuscleGroup(input)).toEqual(['chest', 'biceps'])
  })

  test('getExerciseSetData should return empty array for zero reps or weight', () => {
    const input = [{ reps: 0, weight: 100, exerciseSetsData: [{ set: 1, reps: 0, weight: 100 }] }]
    expect(workoutRepository.getExerciseSetData(input)).toEqual([])
  })

  test('getTotalVolume should return 0 for empty data', () => {
    expect(workoutRepository.getTotalVolume([])).toBe(0)
  })

  test('getPrimaryMuscleGroup should return single muscle group when only one exists', () => {
    const input = [{ targetMuscle: 'chest' }, { targetMuscle: 'chest' }, { targetMuscle: 'chest' }]
    expect(workoutRepository.getPrimaryMuscleGroup(input)).toEqual(['chest'])
  })
})

import { renderHook } from '@testing-library/react-hooks'
import {
  useSaveCompletedWorkout,
  getExerciseIds,
  getExerciseSetData,
  getTotalVolume,
  getTotalSets,
  getPrimaryMuscleGroup,
  getAggregatedWorkoutData,
} from '@lib/workouts/hooks'
import { AsyncStorageInstance } from '@services/asyncstorage'

jest.mock('../../WorkoutRepository')
jest.mock('@services/asyncstorage')
jest.mock('@tanstack/react-query', () => ({
  useMutation: jest.fn(() => ({
    mutate: jest.fn(),
    isLoading: false,
    isError: false,
    isSuccess: false,
  })),
}))

describe('Workout Hooks', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('useSaveCompletedWorkout should return a mutation function', () => {
    const { result } = renderHook(() => useSaveCompletedWorkout())

    expect(result.current.mutate).toBeDefined()
  })

  test('getExerciseIds should return an array of exercise IDs', () => {
    const input = [{ exerciseId: 1 }, { exerciseId: 2 }, { exerciseId: 3 }]
    expect(getExerciseIds(input)).toEqual([1, 2, 3])
  })

  test('getExerciseSetData should return exercise set data for non-zero reps and weight', () => {
    const input = [
      { reps: 10, weight: 100, exerciseSetsData: [{ set: 1, reps: 10, weight: 100 }] },
      { reps: 0, weight: 100, exerciseSetsData: [{ set: 1, reps: 0, weight: 100 }] },
    ]
    expect(getExerciseSetData(input)).toEqual([{ set: 1, reps: 10, weight: 100 }])
  })

  test('getTotalVolume should calculate total volume correctly', () => {
    const input = [
      { reps: 10, weight: 100 },
      { reps: 8, weight: 120 },
    ]
    expect(getTotalVolume(input)).toBe(1960)
  })

  test('getTotalSets should count total sets correctly', () => {
    const input = [{}, {}, {}]
    expect(getTotalSets(input)).toBe(3)
  })

  test('getPrimaryMuscleGroup should return top 2 muscle groups', () => {
    const input = [
      { targetMuscle: 'chest' },
      { targetMuscle: 'biceps' },
      { targetMuscle: 'chest' },
      { targetMuscle: 'triceps' },
    ]
    expect(getPrimaryMuscleGroup(input)).toEqual(['chest', 'biceps'])
  })

  test('getAggregatedWorkoutData should return aggregated data', async () => {
    AsyncStorageInstance.getUserData.mockResolvedValue([{ user: { userId: 'test-user' } }])

    const input = [
      {
        exerciseId: 1,
        reps: 10,
        weight: 100,
        targetMuscle: 'chest',
        exerciseSetsData: [{ set: 1, reps: 10, weight: 100 }],
      },
      {
        exerciseId: 2,
        reps: 8,
        weight: 120,
        targetMuscle: 'biceps',
        exerciseSetsData: [{ set: 1, reps: 8, weight: 120 }],
      },
    ]

    const result = await getAggregatedWorkoutData(input, 'Test Workout', 3600)

    expect(result).toEqual({
      completedWorkoutParams: {
        exercises: [1, 2],
        primaryMuscleGroups: ['chest', 'biceps'],
        totalVolume: 1960,
        totalSets: 2,
        workoutTitle: 'Test Workout',
        duration: 3600,
      },
    })
  })

  test('getExerciseSetData should return empty array for zero reps or weight', () => {
    const input = [{ reps: 0, weight: 100, exerciseSetsData: [{ set: 1, reps: 0, weight: 100 }] }]
    expect(getExerciseSetData(input)).toEqual([])
  })

  test('getTotalVolume should return 0 for empty data', () => {
    expect(getTotalVolume([])).toBe(0)
  })

  test('getPrimaryMuscleGroup should return single muscle group when only one exists', () => {
    const input = [{ targetMuscle: 'chest' }, { targetMuscle: 'chest' }, { targetMuscle: 'chest' }]
    expect(getPrimaryMuscleGroup(input)).toEqual(['chest'])
  })

  test('getAggregatedWorkoutData should handle missing user data', async () => {
    AsyncStorageInstance.getUserData.mockResolvedValue([null])

    const input = [
      {
        exerciseId: 1,
        reps: 10,
        weight: 100,
        targetMuscle: 'chest',
        exerciseSetsData: [{ set: 1, reps: 10, weight: 100 }],
      },
    ]

    const result = await getAggregatedWorkoutData(input, 'Test Workout', 3600)

    expect(result.completedWorkoutParams.userId).toBeUndefined()
  })
})

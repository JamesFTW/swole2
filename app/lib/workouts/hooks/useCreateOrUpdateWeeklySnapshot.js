import { useMutation } from '@tanstack/react-query'
import { WorkoutRepository } from '../WorkoutRepository'

const workoutRepository = new WorkoutRepository()

export const useCreateOrUpdateWeeklySnapshot = () => {
  return useMutation({
    mutationFn: async ({ finishedExercises, duration, completedWorkoutData }) => {
      if (!completedWorkoutData.completedWorkoutData || !completedWorkoutData.completedWorkoutData.completedWorkoutId) {
        throw new Error('Invalid completedWorkoutData')
      }
      if (duration < 0) {
        throw new Error('Invalid duration')
      }
      const weeklySnapshotParams = getAggregateSnapshotData(finishedExercises, duration, completedWorkoutData)
      return await workoutRepository.createOrUpdateWeeklySnapshot(weeklySnapshotParams)
    },
  })
}

const getAggregateSnapshotData = (data, duration, completedWorkoutData) => {
  const exerciseSetData = workoutRepository.getExerciseSetData(data)
  const totalVolume = workoutRepository.getTotalVolume(exerciseSetData)
  const totalSets = workoutRepository.getTotalSets(exerciseSetData)
  const totalWorkoutTime = duration

  const weeklySnapshotParams = {
    totalSets,
    totalVolume,
    totalWorkoutTime,
    completedWorkoutId: completedWorkoutData.completedWorkoutData.completedWorkoutId,
  }

  return { weeklySnapshotParams }
}

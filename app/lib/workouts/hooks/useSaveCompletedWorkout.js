import { useMutation } from '@tanstack/react-query'
import { WorkoutRepository } from '../WorkoutRepository'

const workoutRepository = new WorkoutRepository()

export const useSaveCompletedWorkout = () => {
  return useMutation({
    mutationFn: async ({ finishedExercises, workoutTitle, duration }) => {
      try {
        const completedWorkoutParams = await getAggregatedWorkoutData(finishedExercises, workoutTitle, duration)
        return workoutRepository.saveCompletedWorkout(completedWorkoutParams)
      } catch (error) {
        throw error
      }
    },
  })
}

export const getAggregatedWorkoutData = async (data, workoutTitle, duration) => {
  const exercises = workoutRepository.getExerciseIds(data)
  const exerciseSetData = workoutRepository.getExerciseSetData(data)
  const totalVolume = workoutRepository.getTotalVolume(exerciseSetData)
  const totalSets = workoutRepository.getTotalSets(exerciseSetData)
  const primaryMuscleGroups = workoutRepository.getPrimaryMuscleGroup(data)

  const completedWorkoutParams = {
    exercises,
    totalVolume,
    totalSets,
    primaryMuscleGroups,
    workoutTitle,
    duration,
  }

  return { completedWorkoutParams }
}

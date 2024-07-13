import { useQuery } from '@tanstack/react-query'
import { WorkoutRepository } from '../WorkoutRepository'

export const useGetCompletedWorkouts = () => {
  const workoutRepository = new WorkoutRepository()

  return useQuery({
    queryKey: ['getCompletedWorkouts'],
    queryFn: async () => {
      try {
        const res = await workoutRepository.getCompletedWorkouts()

        if (res) {
          return res
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    onSuccess: data => {
      return data
    },
    onError: error => {
      throw error
    },
  })
}

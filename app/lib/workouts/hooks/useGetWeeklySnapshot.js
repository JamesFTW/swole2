import { useQuery } from '@tanstack/react-query'
import { WorkoutRepository } from '../WorkoutRepository'

export const useGetWeeklySnapshot = () => {
  const workoutRepository = new WorkoutRepository()

  return useQuery({
    queryKey: ['weeklyWorkoutSnapshot'],
    queryFn: async () => {
      try {
        const res = await workoutRepository.fetchWeeklySnapShot()

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

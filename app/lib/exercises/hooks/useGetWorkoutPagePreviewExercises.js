import { getWorkoutPagePreviewExercises } from '..'

import { useQuery } from '@tanstack/react-query'

export const useGetWorkoutPagePreviewExercises = () => {
  return useQuery({
    queryKey: ['workoutPagePreviewExercises'],
    queryFn: async bodyData => {
      try {
        const res = await getWorkoutPagePreviewExercises(bodyData)

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
      console.log(error)
    },
  })
}

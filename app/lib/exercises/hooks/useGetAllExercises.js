import { getAllExercises } from '..'

import {
  useQuery,
} from '@tanstack/react-query'

export const useGetAllExercises = () => {
  return useQuery({
    queryKey: ['allExercises'],
    queryFn: async () => {
      try {
        const res = await getAllExercises()

        if (res) {
          return res
        }
      } catch(error) {
        throw new Error(error)
      }

  },
  onSuccess: (data) => {
    return data
  },
  onError: (error) => {
    console.log(error)
  }
  })
}
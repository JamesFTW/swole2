import { getUserExercise } from '..'
import { getUserProfileData } from '../../../users'

import { useQuery } from '@tanstack/react-query'

export const useGetUserExercise = exerciseId => {
  return useQuery({
    queryKey: ['userExercise'],
    queryFn: async () => {
      try {
        const userProfileData = await getUserProfileData()

        if (userProfileData) {
          const res = await getUserExercise(
            userProfileData.userInfo.userId,
            exerciseId,
          )

          return res
        }
      } catch (error) {
        Promise.reject(error)
      }
    },
    onSuccess: data => {
      return data
    },
    onError: error => {
      Promise.reject(error)
    },
  })
}

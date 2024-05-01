import { getUserExercise } from '..'
import { UserRepository } from '@lib/users/UserRepository'

import { useQuery } from '@tanstack/react-query'

export const useGetUserExercise = exerciseId => {
  const userRepository = new UserRepository()
  return useQuery({
    queryKey: ['userExercise'],
    queryFn: async () => {
      try {
        const userProfileData = await userRepository.getUserProfileData()

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

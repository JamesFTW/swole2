import { useMutation } from '@tanstack/react-query'
import { UserRepository } from '@lib/users/UserRepository'

export const useSaveUserExerciseData = () => {
  const userRepoistory = new UserRepository()

  return useMutation({
    mutationFn: async bodyData => {
      try {
        const res = await userRepoistory.postUserExercises(bodyData)

        if (res) {
          return res
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    onError: error => {
      throw error
    },
  })
}

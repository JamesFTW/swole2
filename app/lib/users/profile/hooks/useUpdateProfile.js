import { useContext } from 'react'
import { UserRepository } from '@lib/users/UserRepository'
import { useMutation } from '@tanstack/react-query'
import { ProfileContext } from '@providers'

export const useUpdateProfile = () => {
  const userRepository = new UserRepository()
  const { updateProfileData } = useContext(ProfileContext)

  return useMutation({
    mutationFn: async data => {
      const res = await userRepository.updateUserProfileData(data)
      updateProfileData(data)
      return res
    },
    onError: error => {
      console.error('Update error:', error)
    },
    retry: 3,
    retryDelay: 1000,
  })
}

import { useContext } from 'react'
import { UserRepository } from '../UserRepository'
import { useQuery } from '@tanstack/react-query'
import { ProfileContext } from '@providers'

export const useFetchUserProfile = () => {
  const { updateProfileData } = useContext(ProfileContext)

  const userRepoistory = new UserRepository()

  return useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => {
      return userRepoistory.fetchUserProfile()
    },
    onSuccess: data => {
      updateProfileData(data)
      return data
    },
    onError: error => {
      return error
    },
  })
}

import { useContext } from 'react'
import { UserRepository } from '../UserRepository'
import { useQuery } from '@tanstack/react-query'
import { ProfileContext } from '@providers'

export const useGetUserProfile = () => {
  const { profileData, updateProfileData } = useContext(ProfileContext)

  if (profileData !== null) {
    return {
      isLoading: false,
      isError: false,
      isSuccess: true,
      data: profileData,
    }
  }

  const userRepoistory = new UserRepository()

  return useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => {
      return userRepoistory.getUserProfileData()
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

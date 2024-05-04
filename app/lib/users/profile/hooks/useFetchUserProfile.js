import { useContext } from 'react'
import { UserRepository } from '../../UserRepository'
import { useQuery } from '@tanstack/react-query'
import { ProfileContext } from '@providers'

export const useFetchUserProfile = () => {
  const { updateProfileData } = useContext(ProfileContext)

  const userRepoistory = new UserRepository()

  return useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => {
      const data = await userRepoistory.fetchUserProfile()
      updateProfileData(data)
      return data
    },
    onError: error => {
      console.error('Fetch error:', error)
    },
  })
}

import { getUserProfile } from '../'
import { AsyncStorage } from '../../../services/asyncstorage'

import {
  useQuery,
} from '@tanstack/react-query'

export const useGetUserProfile = () => {
  return useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => {
      const asyncstore = new AsyncStorage()
      
      const [userData, error] = await asyncstore.getUserData()

      if (userData !== null) {
        return userData
      }

      if (error) {
        throw new Error(error)
      }

      try {
        const userData = await getUserProfile()

        if (userData) {
          return userData
        }
      } catch(error) {
        throw new Error(error)
      }

  },
  onSuccess: (data) => {
    console.log(data)
    //Store data in async storage
  },
  onError: (error) => {
    console.log(error)
  }
  })
}
//on refetch check if value exists in asyncstorage first
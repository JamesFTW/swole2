import { getUserProfile } from '../'
import { AsyncStorage, ASYNC_STORE_CONSTANTS } from '../../../services/asyncstorage'

import {
  useQuery,
} from '@tanstack/react-query'

export const useGetUserProfile = () => {
  return useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => {
      const asyncstore = new AsyncStorage()
      // asyncstore.clearAll()
      
      const [userData, error] = await asyncstore.getUserProfileData()

      if (userData !== null) {
        return userData
      }

      if (error) {
        throw new Error(error)
      }

      try {
        const userData = await getUserProfile()
        
        asyncstore.storeObjData(ASYNC_STORE_CONSTANTS.USER_PROFILE_DATA, userData)

        if (userData) {
          return userData
        }
      } catch(error) {
        throw new Error(error)
      }

  },
  onSuccess: (data) => {
    return data
    //Store data in async storage
  },
  onError: (error) => {
    return error
  }
  })
}
//on refetch check if value exists in asyncstorage first
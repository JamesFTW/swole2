import { getUserProfile } from '../'
import { clearCookies, getCookies } from '../../http/cookiemanager'
import { ASYNC_STORE_CONSTANTS, AsyncStorage } from '../../../services/asyncstorage'

import {
  useQuery,
} from '@tanstack/react-query'

export const useGetUserProfile = () => {
  return useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => {
      const asyncStore = new AsyncStorage()

      if (asyncStore.getObjData(ASYNC_STORE_CONSTANTS.USER_DATA)) {
        try {
          const userData = await asyncStore.getObjData(ASYNC_STORE_CONSTANTS.USER_DATA)

          return userData
        } catch(error) {
          throw new Error(error)
        }
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
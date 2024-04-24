import { getUserProfileData } from '../'
import {
  AsyncStorage,
  ASYNC_STORE_CONSTANTS,
} from '../../../services/asyncstorage'

import { useQuery } from '@tanstack/react-query'

export const useGetUserId = () => {
  return useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => {
      const data = getUserProfileData()
      return data.userProfile.userInfo.userId
    },
    onSuccess: data => {
      return data
      //Store data in async storage
    },
    onError: error => {
      return error
    },
  })
}
//on refetch check if value exists in asyncstorage first

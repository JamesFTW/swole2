import { getUserProfile } from '../'

import {
  useQuery,
} from '@tanstack/react-query'

export const useGetUserProfile = () => {
  return useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => {
      try {
        const res = await getUserProfile()

        if (res) {
          return res
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
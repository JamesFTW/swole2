
import { userSignin } from '../'

import {
  useMutation,
} from '@tanstack/react-query'

export const useUserSignin = () => {
  return useMutation({
    mutationFn: async (bodyData) => {
      try {
        const res = await userSignin(bodyData)

        if (res) {
          return res
        }
      } catch(error) {
        throw new Error(error)
      }

  },
  onSuccess: (data) => {
    console.log(data.session)
    //Store data in async storage
  },
  onError: (error) => {
    console.log(error)
  }
  })
}
//on refetch check if value exists in asyncstorage first
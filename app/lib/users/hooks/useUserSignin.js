import { userSignin } from '../'
import { setCookieFromResponse, getCookies, clearCookies } from '../../http/cookiemanager'

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
    const { cookie } = data.session
    setCookieFromResponse(cookie)
    getCookies()
    clearCookies()
    //Store data in async storage
  },
  onError: (error) => {
    console.log(error)
  }
  })
}
//on refetch check if value exists in asyncstorage first
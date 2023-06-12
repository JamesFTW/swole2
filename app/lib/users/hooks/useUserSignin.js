import { userSignin } from '../'
import { setCookie } from '../../http/cookiemanager'
import { AsyncStorage, ASYNC_STORE_CONSTANTS } from '../../../services/asyncstorage'

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
    const { cookie, passport } = data.session

    if (cookie && passport) {
      const asyncCookieStore = new AsyncStorage(cookie)
      const asyncUserDataStore = new AsyncStorage(passport)

      setCookie(cookie)

      //might not need this for session cookie
      asyncCookieStore.storeObjData(ASYNC_STORE_CONSTANTS.USER_SESSION_COOKIE)
      asyncUserDataStore.storeObjData(ASYNC_STORE_CONSTANTS.USER_DATA)
    }
  },
  onError: (error) => {
    console.log(error)
  }
  })
}
//on refetch check if value exists in asyncstorage first
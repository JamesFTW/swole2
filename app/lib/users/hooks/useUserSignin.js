import { userSignin } from '../'
import { setCookie } from '../../http/cookiemanager'
import {
  AsyncStorageInstance,
  ASYNC_STORE_CONSTANTS,
} from '../../../services/asyncstorage'

import { useMutation } from '@tanstack/react-query'

export const useUserSignin = () => {
  return useMutation({
    mutationFn: async bodyData => {
      try {
        const res = await userSignin(bodyData)

        if (res) {
          return res
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    onSuccess: data => {
      const { cookie, passport } = data.session

      if (cookie && passport) {
        AsyncStorageInstance.storeObjData(
          ASYNC_STORE_CONSTANTS.USER_SESSION_COOKIE,
          cookie,
        )
        AsyncStorageInstance.storeObjData(
          ASYNC_STORE_CONSTANTS.USER_DATA,
          passport,
        )

        setCookie(cookie)
      }
    },
    onError: error => {
      console.log(error)
    },
  })
}
//on refetch check if value exists in asyncstorage first

import { useContext } from 'react'
import { UserRepository } from '../UserRepository'
import { setCookie } from '../../http/cookiemanager'
import { AsyncStorageInstance, ASYNC_STORE_CONSTANTS } from '@services/asyncstorage'

import { useMutation } from '@tanstack/react-query'
import { AuthContext } from '@providers'

export const useUserSignin = () => {
  const { login } = useContext(AuthContext)
  const userRepoistory = new UserRepository()

  return useMutation({
    mutationFn: async bodyData => {
      try {
        const res = await userRepoistory.signIn(bodyData)

        if (res) {
          return res
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    onSuccess: data => {
      const { cookie, passport } = data.session
      login(passport.user)

      if (cookie && passport) {
        AsyncStorageInstance.storeObjData(ASYNC_STORE_CONSTANTS.USER_SESSION_COOKIE, cookie)

        AsyncStorageInstance.storeObjData(ASYNC_STORE_CONSTANTS.USER_DATA, passport)

        try {
          setCookie(cookie)
        } catch (error) {
          console.error('Error setting session cookie:', error)
        }
      }

      return data
    },
    onError: error => {
      console.log(error)
    },
  })
}
//on refetch check if value exists in asyncstorage first

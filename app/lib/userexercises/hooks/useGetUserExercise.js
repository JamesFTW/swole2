import { getUserExercise } from '..'
import { getUserProfile } from '../../users'
import { AsyncStorage } from '../../../services/asyncstorage'

import {
  useQuery,
} from '@tanstack/react-query'

export const useGetUserExercise = (userId, exerciseId) => {
  return useQuery({
    queryKey: ['userExercise'],
    queryFn: async () => {
      try {
        const userProfileData = await getUserProfileData()
        const res = await getUserExercise(userId, exerciseId)

        if (res) {
          return res
        }
      } catch(error) {
        throw new Error(error)
      }

  },
  onSuccess: () => {
    return userExerciseData
  },
  onError: (error) => {
    console.log(error)
  }
  })
}

const getUserProfileData = async () => {
  const asyncstore = new AsyncStorage()

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
}
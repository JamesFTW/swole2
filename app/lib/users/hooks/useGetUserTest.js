
import { userTest } from '..'

import {
  useQuery,
} from '@tanstack/react-query'

export const useGetUserTest = () => {
  //on refetch check if value exists in asyncstorage first
  return useQuery({
    queryKey: ['repoData'],

    queryFn: async () => {
      const user = await userTest()

      if (user) {
        return user
      }
    },
  })
}
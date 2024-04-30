import { AsyncStorageInstance } from '@services/asyncstorage'
import { useQuery } from '@tanstack/react-query'

export const useUserSigninStatus = () => {
  return useQuery({
    queryKey: ['signinStatus'],
    queryFn: async () => {
      const [data] = await AsyncStorageInstance.getUserSessionData()
      return data
    },
    onError: error => {
      console.log(error, 'error')
      const [_, err] = error
      return err
    },
  })
}
//on refetch check if value exists in asyncstorage first

/**
 * Placeholder for userUserSignin hook
 */

// import { userSignin } from '../'
// import { setCookie } from '../../http/cookiemanager'
// import { AsyncStorage, ASYNC_STORE_CONSTANTS } from '../../../services/asyncstorage'
// import {
//   useQuery,
// } from '@tanstack/react-query'


// export const useUserSigninStatus = () => {
//   return useQuery({
//     queryKey: ['userSigninStatus'],
//     queryFn: async () => {
//       const asyncstore = new AsyncStorage()
      
//       const [userData, error] = await asyncstore.getUserSessionData()

//       if (userData !== null) {
//         return userData
//       }

//       if (error) {
//         throw new Error(error)
//       }

//   },
//   onSuccess: (data) => {
//     console.log(data)
//     //Store data in async storage
//   },
//   onError: (error) => {
//     console.log(error)
//   }
//   })
// }
//on refetch check if value exists in asyncstorage first
import { API_ENDPOINT, request, HEADERS, METHODS } from '../http/request'
import { AsyncStorage, ASYNC_STORE_CONSTANTS } from '../../services/asyncstorage'
import qs from 'qs'

export function userSignin(body) {
  return new Promise((resolve, reject) => {
    request({
      endpoint: `${API_ENDPOINT}/users/login`,
      body: qs.stringify(body),
      headers: HEADERS.APPLICATION_X_WWW_FORM_URLENCODED,
      method: METHODS.POST
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Request failed with status ' + res.status);
        }
        return res.json()
      })
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}

export function getUserProfile() {
  return new Promise((resolve, reject) => {
    request({
      endpoint: `${API_ENDPOINT}/users/profile`,
      method: METHODS.GET
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Request failed with status ' + res.status)
        }
        return res.json()
      })
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}

export const getUserProfileData = async () => {
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


// using in a lot of places put in a main hooks directory
// if feature specific but in feature file
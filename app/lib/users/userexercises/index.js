import { API_ENDPOINT, request, METHODS, HEADERS } from '../../http/request'
import qs from 'qs'
import { AsyncStorage } from '../../../services/asyncstorage'

export function getUserExercise(userId, exerciseId) {
  //need to get userId and exerciseId
  return new Promise((resolve, reject) => {
    request({
      endpoint: `${API_ENDPOINT}/userexercises/${userId}/${exerciseId}`,
      method: METHODS.GET,
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Request failed with status ' + res.status)
        }
        return res.json()
      })
      .then(data => {
        resolve(data)
      })
      .catch(err => reject(err))
  })
}

export async function submitUserExercise(body) {
  const asyncstore = new AsyncStorage()

  // TODO: Abstract this since we're going to use it all over. Get easy way to get UserId
  const [userData, error] = await asyncstore.getUserProfileData()
  if (userData !== null) {
  }

  if (error) {
    throw new Error(error)
  }

  return new Promise((resolve, reject) => {
    body.userId = userData.userInfo.userId

    request({
      endpoint: `${API_ENDPOINT}/userexercises/create`,
      body: qs.stringify(body),
      headers: HEADERS.APPLICATION_X_WWW_FORM_URLENCODED,
      method: METHODS.POST,
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Request failed with status ' + res.status)
        }
        return res.json()
      })
      .then(data => {
        resolve(data)
      })
      .catch(err => reject(err))
  })
}

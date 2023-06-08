import { API_ENDPOINT, request, HEADERS, METHODS } from '../http/request'
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

export function getUserProfile(body) {
  return new Promise((resolve, reject) => {
    request({
      endpoint: `${API_ENDPOINT}/users/`,
      method: METHODS.GET
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Request failed with status ' + res.status)
        }
        resolve(res)
      })
      .catch(err => reject(err))
  })
}


// using in a lot of places put in a main hooks directory
// if feature specific but in feature file
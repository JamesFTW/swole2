import CookieManager from '@react-native-cookies/cookies'
import { API_ENDPOINT } from './request'

export function setCookie(cookie) {
  return new Promise((resolve, reject) => {
    try {
      CookieManager.set(API_ENDPOINT, cookie)
      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}

export function getCookies() {
  return new Promise((resolve, reject) => {
    CookieManager.get(API_ENDPOINT)
      .then((cookies) => {
        resolve(cookies)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function clearCookies() {
  return CookieManager.clearAll()
    .then((success) => {
      console.log('CookieManager.clearAll =>', success);
    })
}
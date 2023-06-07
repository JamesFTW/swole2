import CookieManager from '@react-native-cookies/cookies'
import { API_ENDPOINT } from './request'

export function setCookieFromResponse(cookie) {
  return CookieManager.set(API_ENDPOINT, cookie)
    .then((success) => {
      console.log('CookieManager.setFromResponse =>', success)
    })
    .catch((error) => {
      console.log(error)
    })
}

export function getCookies() {
  return CookieManager.get(API_ENDPOINT)
  .then((cookies) => {
    console.log('CookieManager.get =>', cookies);
  })
  .catch((error) => {
    console.log(error)
  })
}

export function clearCookies() {
  return CookieManager.clearAll()
    .then((success) => {
      console.log('CookieManager.clearAll =>', success);
    });
}
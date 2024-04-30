import CookieManager from '@react-native-cookies/cookies'
import { API_ENDPOINT } from './request'

export async function setCookie(cookie) {
  return await CookieManager.set(API_ENDPOINT, cookie)
}

export async function getCookies() {
  try {
    const cookies = await CookieManager.get(API_ENDPOINT)
    return cookies
  } catch (error) {
    throw error
  }
}

export async function clearCookies() {
  const success = await CookieManager.clearAll()
  console.log('CookieManager.clearAll =>', success)
}

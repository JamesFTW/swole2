import  RNAsyncStorage from '@react-native-async-storage/async-storage'

export const ASYNC_STORE_CONSTANTS = {
  USER_DATA: '@user_data',
  USER_SESSION_COOKIE: '@user_session_cookie'
}

/**
 * Might have to return a promise for storeObjData and removeValue
 * When that comes up fix it
 * 
 * Shit might not need to return a promise for any of these.  Come back to it
 */
export class AsyncStorage {
  constructor(data) {
    this.data = data ?? null
  }

  storeObjData = async (storage_key) => {
    try {
      const jsonValue = JSON.stringify(this.data)
      await RNAsyncStorage.setItem(storage_key, jsonValue)
    } catch (error) {
      throw new Error(error)
    }
  }

  getObjData = (storage_key) => {
    return new Promise(async (resolve, reject) => {
      try {
        const jsonValue = await RNAsyncStorage.getItem(storage_key)
        resolve(jsonValue != null ? JSON.parse(jsonValue) : null)
      } catch(error) {
        reject(new Error(error))
      }
    })
  }

  removeValue = async (storage_key) => {
    try {
      await RNAsyncStorage.removeItem(storage_key)
    } catch(error) {
      throw new Error(error)
    } 
    console.log(`Removed value: ${storage_key} from async storage`)
  }
  
  clearAll = async () => {
    try {
      await RNAsyncStorage.clear()
    } catch(error) {
      throw new Error(error)
    } 
    console.log('Cleared all values from async storage')
  }

  getUserData = async () => {
      try {
        const userData = await this.getObjData(ASYNC_STORE_CONSTANTS.USER_DATA)
        return [ userData, null ]
      } catch (error) {
        return [ error, null ]
      } 
  }

  getUserSessionData = async () => {
    try {
      const userData = await this.getObjData(ASYNC_STORE_CONSTANTS.USER_SESSION_COOKIE)
      return [ userData, null ]
    } catch (error) {
      return [ error, null ]
    } 
  }
}


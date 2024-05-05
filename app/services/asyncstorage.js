import RNAsyncStorage from '@react-native-async-storage/async-storage'

export const ASYNC_STORE_CONSTANTS = {
  USER_DATA: '@user_data',
  USER_SESSION_COOKIE: '@user_session_cookie',
  USER_PROFILE_DATA: '@user_profile_data',
  LOCAL_EXERCISE_DATA: '@local_exercise_data',
}

class AsyncStorageSingleton {
  static instance = null

  static getInstance() {
    if (!AsyncStorageSingleton.instance) {
      AsyncStorageSingleton.instance = new AsyncStorageSingleton()
    }
    return AsyncStorageSingleton.instance
  }

  storeObjData = async (storage_key, data) => {
    try {
      const jsonValue = JSON.stringify(data)
      await RNAsyncStorage.setItem(storage_key, jsonValue)
    } catch (error) {
      throw new Error(error)
    }
  }

  getObjData = async storage_key => {
    try {
      const jsonValue = await RNAsyncStorage.getItem(storage_key)
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (error) {
      throw new Error(error)
    }
  }

  removeValue = async storage_key => {
    try {
      await RNAsyncStorage.removeItem(storage_key)
    } catch (error) {
      throw new Error(error)
    }
    console.log(`Removed value: ${storage_key} from async storage`)
  }

  clearAll = async () => {
    try {
      await RNAsyncStorage.clear()
      console.log('Cleared all values from async storage')
    } catch (error) {
      throw new Error(error)
    }
  }

  getUserData = async () => {
    try {
      const userData = await this.getObjData(ASYNC_STORE_CONSTANTS.USER_DATA)
      return [userData, null]
    } catch (error) {
      return [error, null]
    }
  }

  getUserSessionData = async () => {
    try {
      const userSessionData = await this.getObjData(ASYNC_STORE_CONSTANTS.USER_SESSION_COOKIE)
      return [userSessionData, null]
    } catch (error) {
      return [null, error]
    }
  }

  getUserProfileData = async () => {
    try {
      const userProfileData = await this.getObjData(ASYNC_STORE_CONSTANTS.USER_PROFILE_DATA)
      return [userProfileData, null]
    } catch (error) {
      return [null, error]
    }
  }

  updateUserProfileData = async data => {
    try {
      await this.storeObjData(ASYNC_STORE_CONSTANTS.USER_PROFILE_DATA, data)
      return [data, null]
    } catch (error) {
      return [null, error]
    }
  }

  getAllExercises = async () => {
    try {
      const exerciseData = await this.getObjData(ASYNC_STORE_CONSTANTS.LOCAL_EXERCISE_DATA)
      return [exerciseData, null]
    } catch (error) {
      return [error, null]
    }
  }
}

export const AsyncStorageInstance = AsyncStorageSingleton.getInstance()

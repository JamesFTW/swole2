import  RNAsyncStorage from '@react-native-async-storage/async-storage'

export class AsyncStorage {
  constructor(data) {
    this.data = data
  }

  storeObjData = async (storage_key) => {
    try {
      const jsonValue = JSON.stringify(this.data)
      await RNAsyncStorage.setItem(storage_key, jsonValue)
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }

  getObjData = async (storage_key) => {
    try {
      const jsonValue = await RNAsyncStorage.getItem(storage_key)
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch(e) {
      console.log(e)
    }
  }

  removeValue = async (storage_key) => {
    try {
      await AsyncStorage.removeItem(storage_key)
    } catch(error) {
     console.log(error)
    }
  
    console.log('Done.')
  }
}

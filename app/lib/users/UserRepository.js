import { API_ENDPOINT, request, HEADERS, METHODS } from '../http/request'
import {
  AsyncStorageInstance,
  ASYNC_STORE_CONSTANTS,
} from '@services/asyncstorage'
import qs from 'qs'

export class UserRepository {
  async signIn(body) {
    const response = await request({
      endpoint: `${API_ENDPOINT}/users/login`,
      body: qs.stringify(body),
      headers: HEADERS.APPLICATION_X_WWW_FORM_URLENCODED,
      method: METHODS.POST,
    })

    return response.json()
  }

  async fetchUserProfile() {
    const response = await request({
      endpoint: `${API_ENDPOINT}/users/profile`,
      method: METHODS.GET,
    })

    return response.json()
  }

  async updateUserProfile(data) {
    const response = await request({
      endpoint: `${API_ENDPOINT}/users/profile/update`,
      body: JSON.stringify(data),
      headers: HEADERS.APPLICATION_JSON,
      method: METHODS.PUT,
    })

    return response.json()
  }

  async fetchUserExercise(exerciseId) {
    const userProfileData = await this.getUserProfileData()

    if (userProfileData) {
      const response = await request({
        endpoint: `${API_ENDPOINT}/userexercises/${userProfileData.userInfo.userId}/${exerciseId}`,
        method: METHODS.GET,
      })

      return response.json()
    }
  }

  async getUserProfileData() {
    const [userProfileData, error] =
      await AsyncStorageInstance.getUserProfileData()

    if (error) throw new Error(error)
    if (userProfileData) return userProfileData

    try {
      const userProfileData = await this.fetchUserProfile()

      AsyncStorageInstance.storeObjData(
        ASYNC_STORE_CONSTANTS.USER_PROFILE_DATA,
        userProfileData,
      )

      if (userProfileData) return userProfileData
    } catch (error) {
      throw new Error(error)
    }
  }
}

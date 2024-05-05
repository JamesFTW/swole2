import { API_ENDPOINT, request, HEADERS, METHODS } from '../http/request'
import {
  AsyncStorageInstance,
  ASYNC_STORE_CONSTANTS,
} from '@services/asyncstorage'
import qs from 'qs'
import { readFile } from 'react-native-fs'

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

  async fetchUserExercise(exerciseId) {
    const userProfileData = await this.getUserProfileData()

    if (userProfileData) {
      const response = await request({
        endpoint: `${API_ENDPOINT}/userexercises/${userProfileData.userId}/${exerciseId}`,
        method: METHODS.GET,
      })

      return response.json()
    }
  }

  async fetchUserProfile() {
    const response = await request({
      endpoint: `${API_ENDPOINT}/users/profile`,
      method: METHODS.GET,
    })

    const data = await response.json()

    await AsyncStorageInstance.storeObjData(
      ASYNC_STORE_CONSTANTS.USER_PROFILE_DATA,
      data,
    )

    return data
  }

  async getUserProfileData() {
    //TODO: Implement cache mechanism
    const [userProfileData, error] =
      await AsyncStorageInstance.getUserProfileData()

    if (error) throw new Error(error)

    if (userProfileData) {
      return userProfileData
    }

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

  async uploadProfilePhoto(filePath) {
    try {
      const base64Data = await readFile(filePath, 'base64')

      const formData = new FormData()
      formData.append('file', {
        uri: filePath,
        type: 'image/jpeg',
        name: 'image.jpg',
        data: base64Data,
      })

      const res = await request({
        endpoint: `${API_ENDPOINT}/users/profile/update/photo`,
        method: METHODS.POST,
        headers: HEADERS.MULTIPART_FORM_DATA,
        body: formData,
      })

      if (!res.ok) {
        throw new Error('Request failed with status ' + res.status)
      }

      return res
    } catch (err) {
      throw err
    }
  }

  async updateUserProfileData(data) {
    try {
      const response = await request({
        endpoint: `${API_ENDPOINT}/users/profile/update`,
        body: qs.stringify(data),
        headers: HEADERS.APPLICATION_X_WWW_FORM_URLENCODED,
        method: METHODS.PUT,
      })

      if (!response.ok) {
        throw new Error('Request failed with status ' + response.status)
      }
      return response
    } catch (err) {
      throw err
    }
  }
}

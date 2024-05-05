import '__mocks__/@react-native-async-storage/async-storage'
import { AsyncStorageInstance, ASYNC_STORE_CONSTANTS } from '../asyncstorage'
import AsyncStorage from '@react-native-async-storage/async-storage'

describe('AsyncStorage', () => {
  let asyncStorage

  beforeEach(() => {
    asyncStorage = AsyncStorageInstance
    jest.clearAllMocks()
  })

  describe('Get Item', () => {
    it('should retrieve stored object data', async () => {
      const mockData = { name: 'John', age: 30 }
      const jsonValue = JSON.stringify(mockData)
      AsyncStorage.getItem.mockResolvedValueOnce(jsonValue)

      const storageKey = 'my_storage_key'

      const result = await asyncStorage.getObjData(storageKey)

      expect(AsyncStorage.getItem).toHaveBeenCalledWith(storageKey)
      expect(result).toEqual(mockData)
    })

    it('should return null for non-existent key', async () => {
      const storageKey = 'non_existent_key'
      AsyncStorage.getItem.mockResolvedValueOnce(null)

      const result = await asyncStorage.getObjData(storageKey)

      expect(AsyncStorage.getItem).toHaveBeenCalledWith(storageKey)
      expect(result).toBeNull()
    })

    it('should reject the promise on error', async () => {
      const storageKey = 'my_storage_key'
      const errorMessage = 'Error retrieving data'
      AsyncStorage.getItem.mockRejectedValueOnce(new Error(errorMessage))

      await expect(asyncStorage.getObjData(storageKey)).rejects.toThrowError(errorMessage)
    })

    it('should return user session data', async () => {
      const mockGetObjData = jest.fn().mockResolvedValue({ sessionId: '123456' })
      asyncStorage.getObjData = mockGetObjData

      const [userData, error] = await asyncStorage.getUserSessionData()

      expect(mockGetObjData).toHaveBeenCalledWith('@user_session_cookie')
      expect(userData).toEqual({ sessionId: '123456' })
      expect(error).toBeNull()
    })

    it('should return null if no user session data is found', async () => {
      const mockGetObjData = jest.fn().mockResolvedValue(null)
      asyncStorage.getObjData = mockGetObjData

      const [userData, error] = await asyncStorage.getUserSessionData()

      expect(mockGetObjData).toHaveBeenCalledWith('@user_session_cookie')
      expect(userData).toBeNull()
      expect(error).toBeNull()
    })
  })
  describe('getUserProfileData', () => {
    it('should retrieve user profile data successfully', async () => {
      const mockUserProfileData = { name: 'John Doe', age: 25 }
      asyncStorage.getObjData = jest.fn().mockResolvedValueOnce(mockUserProfileData)

      const [userData, error] = await asyncStorage.getUserProfileData()

      expect(asyncStorage.getObjData).toHaveBeenCalledWith(ASYNC_STORE_CONSTANTS.USER_PROFILE_DATA)
      expect(userData).toEqual(mockUserProfileData)
      expect(error).toBeNull()
    })

    it('should handle error when retrieving user profile data', async () => {
      const errorMessage = 'Error retrieving user profile data'
      asyncStorage.getObjData = jest.fn().mockRejectedValueOnce(new Error(errorMessage))

      const [userData, error] = await asyncStorage.getUserProfileData()

      expect(asyncStorage.getObjData).toHaveBeenCalledWith(ASYNC_STORE_CONSTANTS.USER_PROFILE_DATA)
      expect(userData).toBeNull()
      expect(error).toEqual(new Error(errorMessage))
    })
  })

  describe('updateUserProfileData', () => {
    it('should update user profile data successfully', async () => {
      const mockUserProfileData = { name: 'Jane Doe', age: 30 }
      asyncStorage.storeObjData = jest.fn().mockResolvedValueOnce()

      const [updatedData, error] = await asyncStorage.updateUserProfileData(mockUserProfileData)

      expect(asyncStorage.storeObjData).toHaveBeenCalledWith(
        ASYNC_STORE_CONSTANTS.USER_PROFILE_DATA,
        mockUserProfileData,
      )
      expect(updatedData).toEqual(mockUserProfileData)
      expect(error).toBeNull()
    })

    it('should handle error when updating user profile data', async () => {
      const errorMessage = 'Error updating user profile data'
      asyncStorage.storeObjData = jest.fn().mockRejectedValueOnce(new Error(errorMessage))

      const mockUserProfileData = { name: 'Jane Doe', age: 30 }
      const [updatedData, error] = await asyncStorage.updateUserProfileData(mockUserProfileData)

      expect(asyncStorage.storeObjData).toHaveBeenCalledWith(
        ASYNC_STORE_CONSTANTS.USER_PROFILE_DATA,
        mockUserProfileData,
      )
      expect(updatedData).toBeNull()
      expect(error).toEqual(new Error(errorMessage))
    })
  })
})

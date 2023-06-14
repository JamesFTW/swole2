import { AsyncStorage } from '../asyncstorage'
import { getItem } from '@react-native-async-storage/async-storage'

jest.mock('@react-native-async-storage/async-storage')

describe('AsyncStorage', () => {
  let asyncStorage

  beforeEach(() => {
    asyncStorage = new AsyncStorage()
  })

  describe('Get Item', () => {
    it('should retrieve stored object data', async () => {
      const mockData = { name: 'John', age: 30 }
      const jsonValue = JSON.stringify(mockData)
      getItem.mockResolvedValueOnce(jsonValue)
  
      const storageKey = 'my_storage_key'
  
      const result = await asyncStorage.getObjData(storageKey)
  
      expect(getItem).toHaveBeenCalledWith(storageKey)
      expect(result).toEqual(mockData)
    })
  
    it('should return null for non-existent key', async () => {
      const storageKey = 'non_existent_key'
      getItem.mockResolvedValueOnce(null)
  
      const result = await asyncStorage.getObjData(storageKey)
  
      expect(getItem).toHaveBeenCalledWith(storageKey)
      expect(result).toBeNull()
    })
  
    it('should reject the promise on error', async () => {
      const storageKey = 'my_storage_key'
      const errorMessage = 'Error retrieving data'
      getItem.mockRejectedValueOnce(new Error(errorMessage))
  
      await expect(asyncStorage.getObjData(storageKey)).rejects.toThrowError(errorMessage)
    })
  })
})
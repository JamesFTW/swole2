import { UserRepository } from '../UserRepository'
import { request, API_ENDPOINT, HEADERS, METHODS } from '../../http/request'
import { AsyncStorageInstance } from '@services/asyncstorage'

jest.mock('../../http/request')
jest.mock('@services/asyncstorage', () => ({
  AsyncStorageInstance: {
    getUserProfileData: jest.fn(),
    storeObjData: jest.fn(),
  },
}))
jest.mock('react-native-fs', () => ({
  readFile: jest.fn(),
}))

describe('UserRepository', () => {
  beforeEach(() => {
    asyncStorage = AsyncStorageInstance
    jest.clearAllMocks()
  })

  it('should sign in a user', async () => {
    const userRepository = new UserRepository()
    const mockResponse = { token: 'mockToken' }
    const username = 'jamesftw'
    const password = 'passwordl#'
    request.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockResponse),
    })

    const signInResponse = await userRepository.signIn({ username, password })

    expect(request).toHaveBeenCalledWith({
      endpoint: `${API_ENDPOINT}/users/login`,
      body: `username=${username}&password=${encodeURIComponent(password)}`,
      headers: HEADERS.APPLICATION_X_WWW_FORM_URLENCODED,
      method: METHODS.POST,
    })
    expect(signInResponse).toEqual(mockResponse)
  })
})

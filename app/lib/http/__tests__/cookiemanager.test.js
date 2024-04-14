import CookieManager from '@react-native-cookies/cookies'
import { setCookie, getCookies, clearCookies } from '../cookiemanager'
import { API_ENDPOINT } from '../request'

jest.mock('@react-native-cookies/cookies', () => ({
  set: jest.fn(),
  get: jest.fn(),
  clearAll: jest.fn(),
}))

const mockConsoleLog = jest.fn()

beforeAll(() => {
  global.console = {
    ...global.console,
    log: mockConsoleLog,
  }
})

describe('cookiemanager', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('setCookie', () => {
    it('should call CookieManager.set with the correct arguments', async () => {
      const cookie = {
        cookie: 'testCookie',
        expires: '2023-07-10T22:28:10.249Z',
        secure: false,
        httpOnly: true,
        path: '/',
      }

      await setCookie(cookie)

      expect(CookieManager.set).toHaveBeenCalledWith(API_ENDPOINT, cookie)
    })
  })

  describe('getCookies', () => {
    it('should retrieve the cookies successfully', async () => {
      const cookies = ['cookie1', 'cookie2']

      CookieManager.get.mockResolvedValue(cookies)

      await getCookies()

      expect(CookieManager.get).toHaveBeenCalledWith(API_ENDPOINT)
      expect(CookieManager.get).toHaveBeenCalledWith(expect.any(String))
    })

    it('should handle an error when retrieving cookies', async () => {
      const error = new Error('Error while retrieving cookies')

      CookieManager.get.mockRejectedValue(error)

      await expect(getCookies()).rejects.toThrow(
        'Error while retrieving cookies',
      )
    })
  })

  describe('clearCookies', () => {
    it('should clear all cookies successfully', async () => {
      const successResponse = true

      CookieManager.clearAll.mockResolvedValue(successResponse)

      await clearCookies()

      expect(CookieManager.clearAll).toHaveBeenCalled()
      expect(mockConsoleLog).toHaveBeenCalledWith(
        'CookieManager.clearAll =>',
        successResponse,
      )
    })
  })
})

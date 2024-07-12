import React, { createContext, useState, useEffect } from 'react'
import { AsyncStorageInstance } from '@services/asyncstorage'
import { getCookies, clearCookies } from '@lib/http/cookiemanager'
import { UserRepository } from '@lib/users/UserRepository'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const userRepository = new UserRepository()

  const login = userData => {
    setUser(userData)
    setIsLoggedIn(true)
  }

  const logout = async () => {
    try {
      setUser(null)
      setIsLoggedIn(false)
      await AsyncStorageInstance.clearAll()
      await clearCookies()
    } catch (error) {
      console.error('Error during logout:', error)
    }
  }

  const checkUserAccount = async () => {
    try {
      const userProfile = await userRepository.fetchUserProfile()
      if (userProfile.error === 'Unauthorized') {
        await logout()
        return false
      }
      setUser(userProfile)
      return true
    } catch (error) {
      await logout()
      return false
    }
  }

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const cookies = await getCookies()
        const sessionCookieExpiration = cookies?.['connect.sid']?.expires

        if (sessionCookieExpiration) {
          const expires = new Date(sessionCookieExpiration)
          const currentDate = new Date()

          if (expires < currentDate) {
            await logout()
          } else {
            const accountExists = await checkUserAccount()
            setIsLoggedIn(accountExists)
          }
        } else {
          await logout()
        }
      } catch (error) {
        await logout()
      } finally {
        setIsLoading(false)
      }
    }

    checkAuthStatus()
  }, [])

  const value = {
    user,
    logout,
    isLoggedIn,
    login,
    isLoading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

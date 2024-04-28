import React, { createContext, useState, useEffect } from 'react'
import { AsyncStorageInstance } from '@services/asyncstorage'
import { getCookies, clearCookies } from '@lib/http/cookiemanager'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsloading] = useState(true)

  const login = userData => {
    setUser(userData)
    setIsLoggedIn(true)
  }

  useEffect(() => {
    const getIsLoggedIn = async () => {
      const cookies = await getCookies()
      const sessionCookieExpiration = cookies?.['connect.sid']?.expires

      if (sessionCookieExpiration) {
        const expires = new Date(sessionCookieExpiration)
        const currentDate = new Date()

        if (expires < currentDate) {
          await AsyncStorageInstance.clearAll()
          clearCookies()
          setIsLoggedIn(false)
        } else {
          setIsLoggedIn(true)
        }
      }
    }

    getIsLoggedIn()
    setTimeout(() => {
      setIsloading(false)
    }, 250)
  }, [])

  const logout = async () => {
    setUser(null)
    await clearSessionCookieLogic()
  }

  const value = {
    user,
    logout,
    isLoggedIn,
    login,
    isLoading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

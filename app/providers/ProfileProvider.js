import React, { createContext, useState, useEffect, useCallback } from 'react'
import { AsyncStorageInstance } from '@services/asyncstorage'

export const ProfileContext = createContext()

export const ProfileProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(null)

  useEffect(() => {
    const loadProfileData = async () => {
      if (profileData) return

      const [storedProfileData, error] = await AsyncStorageInstance.getUserProfileData()

      if (storedProfileData) {
        setProfileData(storedProfileData)
      }

      if (error) {
        console.error('Error loading profile data:', error)
      }
    }

    loadProfileData()
  }, [])

  const updateProfileData = useCallback(async data => {
    try {
      setProfileData(data)
      await AsyncStorageInstance.updateUserProfileData(data)
    } catch (error) {
      console.error('Error updating profile data:', error)
    }
  }, [])

  const value = {
    profileData,
    updateProfileData,
  }

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
}

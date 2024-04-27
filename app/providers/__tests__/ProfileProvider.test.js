import React from 'react'
import { Text } from 'react-native'
import { render } from '@testing-library/react-native'
import { AsyncStorageInstance } from '@services/asyncstorage'
import { ProfileProvider, ProfileContext } from '../ProfileProvider'

jest.mock('../../services/asyncstorage', () => ({
  AsyncStorageInstance: {
    getUserProfileData: jest.fn(),
    updateUserProfileData: jest.fn(),
  },
}))

describe('ProfileProvider', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should render children', () => {
    const { getByText } = render(
      <ProfileProvider>
        <Text>Test Child</Text>
      </ProfileProvider>,
    )
    expect(getByText('Test Child')).toBeTruthy()
  })

  test('should load profile data from AsyncStorage on mount', async () => {
    const mockProfileData = { name: 'John Doe', email: 'john@example.com' }
    AsyncStorageInstance.getUserProfileData.mockResolvedValueOnce(
      mockProfileData,
    )

    const TestComponent = () => {
      const { profileData } = React.useContext(ProfileContext)
      return (
        <Text>{profileData ? JSON.stringify(profileData) : 'No data'}</Text>
      )
    }

    const { findByText } = render(
      <ProfileProvider>
        <TestComponent />
      </ProfileProvider>,
    )

    expect(await findByText(JSON.stringify(mockProfileData))).toBeTruthy()
  })

  test('should update profile data in AsyncStorage', async () => {
    const mockProfileData = { name: 'John Doe', email: 'john@example.com' }

    const TestComponent = () => {
      const { updateProfileData } = React.useContext(ProfileContext)
      React.useEffect(() => {
        updateProfileData(mockProfileData)
      }, [updateProfileData])
      return null
    }

    render(
      <ProfileProvider>
        <TestComponent />
      </ProfileProvider>,
    )

    expect(AsyncStorageInstance.updateUserProfileData).toHaveBeenCalledWith(
      mockProfileData,
    )
  })
})

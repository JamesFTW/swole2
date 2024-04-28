import React from 'react'
import { Text } from 'react-native'
import { render } from '@testing-library/react-native'
import { AsyncStorageInstance } from '@services/asyncstorage'
import { ProfileProvider, ProfileContext } from '../ProfileProvider'
import { act } from 'react-test-renderer'

jest.mock('@services/asyncstorage', () => ({
  AsyncStorageInstance: {
    getUserProfileData: jest.fn(),
    updateUserProfileData: jest.fn(),
  },
}))

describe('ProfileProvider', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should render children', async () => {
    const mockProfileData = Promise.resolve([
      { name: 'John Doe', email: 'john@example.com' },
      null,
    ])
    AsyncStorageInstance.getUserProfileData.mockResolvedValueOnce(
      mockProfileData,
    )

    const { getByText } = render(
      <ProfileProvider>
        <Text>Test Child</Text>
      </ProfileProvider>,
    )

    expect(getByText('Test Child')).toBeTruthy()
    await act(() => mockProfileData)
  })

  test('should load profile data from AsyncStorage on mount', async () => {
    const mockProfileData = Promise.resolve([
      { name: 'John Doe', email: 'john@example.com' },
      null,
    ])
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

    expect(
      await findByText('{"name":"John Doe","email":"john@example.com"}'),
    ).toBeTruthy()
    await act(() => mockProfileData)
  })

  test('should update profile data in AsyncStorage', async () => {
    const mockProfileData = Promise.resolve([
      { name: 'John Doe', email: 'john@example.com' },
      null,
    ])
    AsyncStorageInstance.getUserProfileData.mockResolvedValueOnce(
      mockProfileData,
    )

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
    await act(() => mockProfileData)
  })
})

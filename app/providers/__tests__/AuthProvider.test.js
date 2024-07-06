import React from 'react'
import { render, fireEvent, waitFor, act } from '@testing-library/react-native'
import { AuthProvider, AuthContext } from '../AuthProvider'
import { getCookies, clearCookies } from '@lib/http/cookiemanager'
import { AsyncStorageInstance } from '@services/asyncstorage'
import { UserRepository } from '@lib/users/UserRepository'
import { Text } from 'react-native'

jest.mock('@lib/http/cookiemanager', () => ({
  getCookies: jest.fn(),
  clearCookies: jest.fn(),
}))

jest.mock('@services/asyncstorage', () => ({
  AsyncStorageInstance: {
    clearAll: jest.fn(),
  },
}))

jest.mock('@lib/users/UserRepository', () => ({
  UserRepository: jest.fn().mockImplementation(() => ({
    fetchUserProfile: jest.fn(),
  })),
}))

describe('AuthProvider', () => {
  let mockFetchUserProfile

  beforeEach(() => {
    jest.clearAllMocks()
    mockFetchUserProfile = jest.fn()
    UserRepository.mockImplementation(() => ({
      fetchUserProfile: mockFetchUserProfile,
    }))
  })

  it('should render children', async () => {
    const { getByText } = render(
      <AuthProvider>
        <Text>Hello, World!</Text>
      </AuthProvider>,
    )

    await waitFor(() => {
      expect(getByText('Hello, World!')).toBeTruthy()
    })
  })

  it('should set isLoggedIn to true when cookies are valid and user account exists', async () => {
    const expiresDate = new Date()
    expiresDate.setDate(expiresDate.getDate() + 1)
    getCookies.mockResolvedValue({ 'connect.sid': { expires: expiresDate } })
    mockFetchUserProfile.mockResolvedValue({ id: '123', name: 'Test User' })

    const ChildComponent = () => {
      const { isLoggedIn, user, isLoading } = React.useContext(AuthContext)
      if (isLoading) return <Text>Loading...</Text>
      return <Text>{isLoggedIn ? `Logged In: ${user.name}` : 'Not Logged In'}</Text>
    }

    const { getByText } = render(
      <AuthProvider>
        <ChildComponent />
      </AuthProvider>,
    )

    await waitFor(() => expect(getByText('Logged In: Test User')).toBeTruthy())
  })

  it('should set isLoggedIn to false when cookies are expired', async () => {
    const expiresDate = new Date()
    expiresDate.setDate(expiresDate.getDate() - 1)
    getCookies.mockResolvedValue({ 'connect.sid': { expires: expiresDate } })

    const ChildComponent = () => {
      const { isLoggedIn, isLoading } = React.useContext(AuthContext)
      if (isLoading) return <Text>Loading...</Text>
      return <Text>{isLoggedIn ? 'Logged In' : 'Not Logged In'}</Text>
    }

    const { getByText } = render(
      <AuthProvider>
        <ChildComponent />
      </AuthProvider>,
    )

    await waitFor(() => expect(getByText('Not Logged In')).toBeTruthy())
    expect(AsyncStorageInstance.clearAll).toHaveBeenCalled()
    expect(clearCookies).toHaveBeenCalled()
  })

  it('should set isLoggedIn to false when cookies are not present', async () => {
    getCookies.mockResolvedValue(null)

    const ChildComponent = () => {
      const { isLoggedIn, isLoading } = React.useContext(AuthContext)
      if (isLoading) return <Text>Loading...</Text>
      return <Text>{isLoggedIn ? 'Logged In' : 'Not Logged In'}</Text>
    }

    const { getByText } = render(
      <AuthProvider>
        <ChildComponent />
      </AuthProvider>,
    )

    await waitFor(() => expect(getByText('Not Logged In')).toBeTruthy())
  })

  it('should set isLoggedIn to false when user account check fails', async () => {
    const expiresDate = new Date()
    expiresDate.setDate(expiresDate.getDate() + 1)
    getCookies.mockResolvedValue({ 'connect.sid': { expires: expiresDate } })
    mockFetchUserProfile.mockRejectedValue(new Error('Fetch failed'))

    const ChildComponent = () => {
      const { isLoggedIn, isLoading } = React.useContext(AuthContext)
      if (isLoading) return <Text>Loading...</Text>
      return <Text>{isLoggedIn ? 'Logged In' : 'Not Logged In'}</Text>
    }

    const { getByText } = render(
      <AuthProvider>
        <ChildComponent />
      </AuthProvider>,
    )

    await waitFor(() => expect(getByText('Not Logged In')).toBeTruthy())
  })

  it('should set isLoggedIn to false when user is unauthorized', async () => {
    const expiresDate = new Date()
    expiresDate.setDate(expiresDate.getDate() + 1)
    getCookies.mockResolvedValue({ 'connect.sid': { expires: expiresDate } })
    mockFetchUserProfile.mockResolvedValue({ error: 'Unauthorized' })

    const ChildComponent = () => {
      const { isLoggedIn, isLoading } = React.useContext(AuthContext)
      if (isLoading) return <Text>Loading...</Text>
      return <Text>{isLoggedIn ? 'Logged In' : 'Not Logged In'}</Text>
    }

    const { getByText } = render(
      <AuthProvider>
        <ChildComponent />
      </AuthProvider>,
    )

    await waitFor(() => expect(getByText('Not Logged In')).toBeTruthy())
  })

  it('should provide login and logout functions', async () => {
    const ChildComponent = () => {
      const { login, logout, isLoggedIn, user, isLoading } = React.useContext(AuthContext)
      if (isLoading) return <Text>Loading...</Text>
      return (
        <>
          <Text>{isLoggedIn ? `Logged In: ${user?.name}` : 'Not Logged In'}</Text>
          <Text testID="loginButton" onPress={() => login({ id: '123', name: 'Test User' })}>
            Login
          </Text>
          <Text testID="logoutButton" onPress={logout}>
            Logout
          </Text>
        </>
      )
    }

    const { getByText, getByTestId } = render(
      <AuthProvider>
        <ChildComponent />
      </AuthProvider>,
    )

    await waitFor(() => expect(getByText('Not Logged In')).toBeTruthy())

    await act(async () => {
      fireEvent.press(getByTestId('loginButton'))
    })

    await waitFor(() => expect(getByText('Logged In: Test User')).toBeTruthy())

    await act(async () => {
      fireEvent.press(getByTestId('logoutButton'))
    })

    await waitFor(() => expect(getByText('Not Logged In')).toBeTruthy())
  })
})

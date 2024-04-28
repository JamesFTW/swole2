import React from 'react'
import { render, waitFor } from '@testing-library/react-native'
import { AuthProvider, AuthContext } from '../AuthProvider'
import { getCookies, clearCookies } from '@lib/http/cookiemanager'
import { AsyncStorageInstance } from '@services/asyncstorage'
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

describe('AuthProvider', () => {
  it('should render children', () => {
    const { getByText } = render(
      <AuthProvider>
        <Text>Hello, World!</Text>
      </AuthProvider>,
    )

    expect(getByText('Hello, World!')).toBeTruthy()
  })

  it('should set isLoggedIn to true when cookies are valid', async () => {
    const expiresDate = new Date()
    expiresDate.setDate(expiresDate.getDate() + 1)
    getCookies.mockResolvedValue({ 'connect.sid': { expires: expiresDate } })

    const ChildComponent = () => {
      const { isLoggedIn } = React.useContext(AuthContext)
      return <Text>{isLoggedIn ? 'Logged In' : 'Not Logged In'}</Text>
    }

    const { getByText } = render(
      <AuthProvider>
        <ChildComponent />
      </AuthProvider>,
    )

    await waitFor(() => expect(getByText('Logged In')).toBeTruthy())
  })

  it('should set isLoggedIn to false when cookies are expired', async () => {
    const expiresDate = new Date()
    expiresDate.setDate(expiresDate.getDate() - 1)
    getCookies.mockResolvedValue({ 'connect.sid': { expires: expiresDate } })

    const ChildComponent = () => {
      const { isLoggedIn } = React.useContext(AuthContext)
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

  it('show set isLoggedIn to false when cookies are not present', async () => {
    getCookies.mockResolvedValue(null)

    const ChildComponent = () => {
      const { isLoggedIn } = React.useContext(AuthContext)
      return <Text>{isLoggedIn ? 'Logged In' : 'Not Logged In'}</Text>
    }

    const { getByText } = render(
      <AuthProvider>
        <ChildComponent />
      </AuthProvider>,
    )

    await waitFor(() => expect(getByText('Not Logged In')).toBeTruthy())
  })
})

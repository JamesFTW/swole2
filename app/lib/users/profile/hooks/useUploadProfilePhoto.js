import { useMutation } from '@tanstack/react-query'
import { UserRepository } from '../../UserRepository'

export const useUploadProfilePhoto = () => {
  const userRepository = new UserRepository()

  return useMutation({
    mutationFn: async filePath => {
      return userRepository.uploadProfilePhoto(filePath)
    },
    onError: error => {
      console.error('Upload error:', error)
    },
    retry: 3,
    retryDelay: 1000,
  })
}

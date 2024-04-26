import { uploadProfilePhoto } from '../'
import { useMutation } from '@tanstack/react-query'

export const useUploadProfilePhoto = () => {
  return useMutation({
    mutationFn: async filePath => {
      return uploadProfilePhoto(filePath)
    },
    onSuccess: data => {
      console.log('Upload successful:', data)
    },
    onError: error => {
      console.error('Upload error:', error)
    },
    retry: 3,
    retryDelay: 1000,
  })
}

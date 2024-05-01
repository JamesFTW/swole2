import { API_ENDPOINT, request, METHODS, HEADERS } from '../../http/request'
import { readFile } from 'react-native-fs'

export async function uploadProfilePhoto(filePath) {
  try {
    const base64Data = await readFile(filePath, 'base64')

    const formData = new FormData()
    formData.append('file', {
      uri: filePath,
      type: 'image/jpeg',
      name: 'image.jpg',
      data: base64Data,
    })

    const res = await request({
      endpoint: `${API_ENDPOINT}/users/profile/update/photo`,
      method: METHODS.POST,
      headers: HEADERS.MULTIPART_FORM_DATA,
      body: formData,
    })

    if (!res.ok) {
      throw new Error('Request failed with status ' + res.status)
    }

    return res
  } catch (err) {
    throw err
  }
}

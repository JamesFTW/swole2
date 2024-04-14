import { API_ENDPOINT, request, METHODS } from '../../http/request'

export function getUserExercise(userId, exerciseId) {
  //need to get userId and exerciseId
  return new Promise((resolve, reject) => {
    request({
      endpoint: `${API_ENDPOINT}/userexercises/${userId}/${exerciseId}`,
      method: METHODS.GET,
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Request failed with status ' + res.status)
        }
        return res.json()
      })
      .then(data => {
        resolve(data)
      })
      .catch(err => reject(err))
  })
}

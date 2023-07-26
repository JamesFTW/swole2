import { API_ENDPOINT, request, METHODS } from '../http/request'

export function getWorkoutPagePreviewExercises() {
  return new Promise((resolve, reject) => {
    request({
      endpoint: `${API_ENDPOINT}/exercises/workoutPagePreview`,
      method: METHODS.GET
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
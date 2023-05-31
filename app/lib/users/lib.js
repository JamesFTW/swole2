import { API_ENDPOINT } from '..'

export function userTest() {
  return new Promise((resolve, reject) => {
    fetch(`${API_ENDPOINT}/users/test`)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}

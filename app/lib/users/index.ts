import { API_ENDPOINT } from '..'

export function userTest() {
  return new Promise((resolve, reject) => {
    fetch(`${API_ENDPOINT}/users/test`)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}


// using in a lot of places put in a main hooks directory
// if feature specific but in feature file
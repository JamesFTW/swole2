import { request } from '../http'
const PROD_API_ENDPOINT = 'https://swoleapi.herokuapp.com/api'

function getAllExercises() {
  return new Promise((resolve, reject) => { 
    request({ 
      endpoint: `${PROD_API_ENDPOINT}/exercise/all`,
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      resolve(data)
    })
    .catch(err => reject(err))
  })
}

module.exports = {
  getAllExercises
}
import { API_ENDPOINT, request, METHODS } from '../http/request'
import { AsyncStorage, ASYNC_STORE_CONSTANTS } from '../../services/asyncstorage'

export const getWorkoutPagePreviewExercises = () => {
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

const fetchAllExercises = () => {
  return new Promise((resolve, reject) => {
    request({
      endpoint: `${API_ENDPOINT}/exercises`,
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

export const getAllExercises = async () => {
  const asyncstore = new AsyncStorage()

  const [exerciseData, error] = await asyncstore.getAllExercises()

  if (exerciseData !== null) {
    return exerciseData
  }

  if (error) {
    throw new Error(error)
  }

  try {
    const exerciseData = await fetchAllExercises()
    
    asyncstore.storeObjData(ASYNC_STORE_CONSTANTS.LOCAL_EXERCISE_DATA, exerciseData)

    if (exerciseData) {
      return exerciseData
    }
  } catch(error) {
    throw new Error(error)
  }
}
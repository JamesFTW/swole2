import { API_ENDPOINT, request, HEADERS, METHODS } from '../http/request'
import { AsyncStorageInstance, ASYNC_STORE_CONSTANTS } from '@services/asyncstorage'
import qs from 'qs'
import { readFile } from 'react-native-fs'

class WorkoutRepository {
  async sendWorkoutData(workoutData) {
    const response = await request({
      endpoint: `${API_ENDPOINT}/workouts`,
      body: qs.stringify(workoutData),
      headers: HEADERS.APPLICATION_JSON,
      method: METHODS.POST,
    })

    return response.json()
  }
}

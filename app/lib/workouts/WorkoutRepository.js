import { API_ENDPOINT, request, METHODS } from '../http/request'

export class WorkoutRepository {
  async fetchWeeklySnapShot() {
    const response = await request({
      endpoint: `${API_ENDPOINT}/workouts/getSnapshot`,
      method: METHODS.GET,
    })

    return response.json()
  }
}

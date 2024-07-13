import { API_ENDPOINT, request, METHODS, HEADERS } from '../http/request'

export class WorkoutRepository {
  constructor() {
    this.baseEndpoint = `${API_ENDPOINT}/workouts`
  }

  async makeRequest(endpoint, method, data = null) {
    const options = {
      endpoint: `${this.baseEndpoint}${endpoint}`,
      method,
      headers: HEADERS.APPLICATION_JSON,
    }

    if (data) {
      options.body = JSON.stringify(data)
    }

    const response = await request(options)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Server response:', errorText)
      throw new Error(`Request failed with status ${response.status}`)
    }

    return response.json()
  }

  fetchWeeklySnapShot() {
    return this.makeRequest('/getSnapshot', METHODS.GET)
  }

  updateWeeklySnapshot(data) {
    return this.makeRequest('/createOrUpdateSnapshot', METHODS.PUT, data)
  }

  saveCompletedWorkout(data) {
    return this.makeRequest('/createCompletedWorkout', METHODS.POST, data)
  }

  getCompletedWorkouts() {
    return this.makeRequest('/getCompletedWorkouts', METHODS.GET)
  }
}

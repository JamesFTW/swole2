import { API_ENDPOINT, request, METHODS, HEADERS } from '../http/request'

export class WorkoutRepository {
  constructor() {
    this.baseEndpoint = `${API_ENDPOINT}/workouts`
  }

  async makeRequest(endpoint, method, data = null) {
    try {
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
    } catch (error) {
      throw error
    }
  }

  fetchWeeklySnapShot() {
    return this.makeRequest('/getSnapshot', METHODS.GET)
  }

  createOrUpdateWeeklySnapshot(data) {
    return this.makeRequest('/createOrUpdateSnapshot', METHODS.POST, data)
  }

  saveCompletedWorkout(data) {
    return this.makeRequest('/createCompletedWorkout', METHODS.POST, data)
  }

  getCompletedWorkouts() {
    return this.makeRequest('/getCompletedWorkouts', METHODS.GET)
  }

  getExerciseIds(data) {
    return data.map(exercise => exercise.exerciseId)
  }

  getExerciseSetData(data) {
    return data.flatMap(item => {
      if (item.reps !== 0 && item.weight !== 0) {
        return item.exerciseSetsData
      }
    })
  }

  getTotalVolume(data) {
    return data.reduce((acc, curr) => {
      return acc + curr.reps * curr.weight
    }, 0)
  }

  getTotalSets(data) {
    return data.reduce((acc, curr) => {
      return acc + 1
    }, 0)
  }

  getPrimaryMuscleGroup(data) {
    const primaryMuscleGroupObj = {}

    for (const key in data) {
      if (primaryMuscleGroupObj[data[key].targetMuscle]) {
        primaryMuscleGroupObj[data[key].targetMuscle] += 1
      } else {
        primaryMuscleGroupObj[data[key].targetMuscle] = 1
      }
    }

    const maxCount = Math.max(...Object.values(primaryMuscleGroupObj))
    const primaryMuscleGroupArray = new Array(maxCount + 1).fill().map(() => [])

    for (const [key, value] of Object.entries(primaryMuscleGroupObj)) {
      primaryMuscleGroupArray[value].push(key)
    }

    const numOfPrimaryMuscleGroups = 2
    const primaryMuscleGroups = []

    for (
      var i = primaryMuscleGroupArray.length - 1;
      i >= 0 && primaryMuscleGroups.length < numOfPrimaryMuscleGroups;
      i--
    ) {
      const muscleGroup = primaryMuscleGroupArray[i]

      for (var j = 0; j < muscleGroup.length && primaryMuscleGroups.length < numOfPrimaryMuscleGroups; j++) {
        primaryMuscleGroups.push(muscleGroup[j])
      }
    }

    return primaryMuscleGroups
  }
}

import { useMutation } from '@tanstack/react-query'
import { WorkoutRepository } from '../WorkoutRepository'

export const useSaveCompletedWorkout = () => {
  const workoutRepository = new WorkoutRepository()

  return useMutation({
    mutationFn: async ({ finishedExercises, workoutTitle, duration }) => {
      const completedWorkoutParams = await getAggregatedWorkoutData(finishedExercises, workoutTitle, duration)
      return await workoutRepository.saveCompletedWorkout(completedWorkoutParams)
    },
  })
}

export const getAggregatedWorkoutData = async (data, workoutTitle, duration) => {
  const exercises = getExerciseIds(data)
  const exerciseSetData = getExerciseSetData(data)
  const totalVolume = getTotalVolume(exerciseSetData)
  const totalSets = getTotalSets(exerciseSetData)
  const primaryMuscleGroups = getPrimaryMuscleGroup(data)

  const completedWorkoutParams = {
    exercises,
    totalVolume,
    totalSets,
    primaryMuscleGroups,
    workoutTitle,
    duration,
  }

  return { completedWorkoutParams }
}

export const getExerciseIds = data => {
  return data.map(exercise => exercise.exerciseId)
}

export const getExerciseSetData = data => {
  return data.flatMap(item => {
    if (item.reps !== 0 && item.weight !== 0) {
      return item.exerciseSetsData
    }
  })
}

export const getTotalVolume = data => {
  return data.reduce((acc, curr) => {
    return acc + curr.reps * curr.weight
  }, 0)
}

export const getTotalSets = data => {
  return data.reduce((acc, curr) => {
    return acc + 1
  }, 0)
}

export const getPrimaryMuscleGroup = data => {
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

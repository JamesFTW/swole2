import { submitUserExercise } from '../'
import { useMutation } from '@tanstack/react-query'
import { getUserProfileData } from '../../index'

export const useSubmitUserExercises = () => {
  return useMutation({
    mutationFn: async bodyData => {
      let userId = await getUserId()

      try {
        if (bodyData) {
          let body = {}
          bodyData.finishedExercises.forEach(exercise => {
            exercise.exerciseSets.forEach(set => {
              if (set.isCompletedSet) {
                body = {
                  userId: userId,
                  exerciseId: set.id || 1, // TODO: weirdly the first obj in the workout doesn't get assigned an id
                  reps: set.reps,
                  weightMoved: set.weight * set.reps,
                }
                submitUserExercise(body)
              }
            })
          })
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    onError: error => {
      console.log(error)
    },
  })
}

async function getUserId() {
  try {
    const userProfileData = await getUserProfileData()
    if (userProfileData.userInfo.userId) {
      return userProfileData.userInfo.userId
    }
  } catch (error) {
    throw new Error(error)
  }
}

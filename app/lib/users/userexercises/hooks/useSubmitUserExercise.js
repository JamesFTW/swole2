import { submitUserExercise } from '../'
import { useMutation } from '@tanstack/react-query'

// // mutation fn
// export const submitExercise = async (userId, set) => {
//   return await submitUserExercise({
//     userId: userId,
//     exerciseId: set.id || 1, // TODO: weirdly the first obj in the workout doesn't get assigned an id
//     reps: set.reps,
//     weightMoved: set.weight * set.reps,
//   })
// }

export const useSubmitUserExercises = (userId, finishedExercises) => {
  const submitUserExercises = async () => {
    for (const exercise of finishedExercises) {
      for (const set of exercise.exerciseSets) {
        if (set.isCompletedSet) {
          // Assuming that submitExercise is an async function that submits the exercise
          await submitUserExercise({
            userId: userId,
            exerciseId: set.id || 1, // TODO: weirdly the first obj in the workout doesn't get assigned an id
            reps: set.reps,
            weightMoved: set.weight * set.reps,
          })
        }
      }
    }
  }

  return useMutation(submitUserExercises, {
    onSuccess: () => {
      console.log('Exercises submitted successfully!')
      // Put any additional logic on success here
    },
    onError: error => {
      console.error('Failed to submit exercises: ', error)
      // Handle error here
    },
  })
}

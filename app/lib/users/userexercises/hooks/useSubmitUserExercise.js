import { submitUserExercise } from '../'
import { useMutation } from '@tanstack/react-query'
// TODO: decide how to break this up thats ~best for testing~ functions just fine, but the useMutation is
//  throwing me for a loop in testing

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

import { useState, useEffect } from 'react'

export function useWorkoutTitle() {
  const [workoutTitle, setWorkoutTitle] = useState('')

  useEffect(() => {
    const date = new Date()
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()]
    const timeOfDay = getTimeOfDayString(date)
    setWorkoutTitle(`${dayOfWeek} ${timeOfDay} Workout`)
  }, [])

  return { workoutTitle }
}

function getTimeOfDayString(date) {
  const hour = date.getHours()
  if (hour >= 4 && hour < 12) return 'Morning'
  if (hour >= 12 && hour < 18) return 'Afternoon'
  if (hour >= 18 && hour < 21) return 'Evening'
  return 'Night'
}

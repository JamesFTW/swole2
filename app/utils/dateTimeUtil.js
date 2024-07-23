export const formatTimeForWeeklySnapshot = timeInSeconds => {
  const hours = Math.floor(timeInSeconds / 3600)
  const minutes = Math.floor((timeInSeconds % 3600) / 60)

  let formattedTime = ''

  formattedTime += `${hours}h `
  formattedTime += `${minutes}m`

  return formattedTime
}

export const formatTimeForCompletedWorkout = seconds => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)

  if (hours === 0 && minutes === 0) {
    return `${seconds}s`
  }

  return `${hours}h ${minutes}m`
}

export const formatWorkoutTime = timestamp => {
  const now = new Date()
  const workoutDate = new Date(timestamp)

  const formatTime = date => {
    return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  }

  if (now.toDateString() === workoutDate.toDateString()) {
    const diffMs = now - workoutDate
    const diffHrs = Math.floor(diffMs / 3600000)
    const diffMins = Math.round((diffMs % 3600000) / 60000)

    if (diffHrs === 0) {
      return `${diffMins}m ago`
    } else if (diffHrs === 1) {
      return `1 hour ago`
    } else {
      return `${diffHrs} hours ago`
    }
  }

  const yesterday = new Date(now)
  yesterday.setDate(yesterday.getDate() - 1)
  if (yesterday.toDateString() === workoutDate.toDateString()) {
    return `Yesterday at ${formatTime(workoutDate)}`
  }

  const date = workoutDate.toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  })
  const time = formatTime(workoutDate)
  return `${date} at ${time}`
}

export const getLocalDateString = (date = new Date()) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

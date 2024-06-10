export const formatTimeForWeeklySnapshot = timeInMilliseconds => {
  const totalSeconds = Math.floor(timeInMilliseconds / 1000)
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)

  let formattedTime = ''

  formattedTime += `${hours}h `
  formattedTime += `${minutes}m`

  return formattedTime
}

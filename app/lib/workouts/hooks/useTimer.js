import { useState } from 'react'

export function useTimer() {
  const [seconds, setSeconds] = useState(0)
  const updateSeconds = newSeconds => setSeconds(newSeconds)
  return { seconds, updateSeconds }
}

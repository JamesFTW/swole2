import { useState, useEffect } from 'react'

export function useFormattedDate() {
  const [formattedDate, setFormattedDate] = useState('')

  useEffect(() => {
    const date = new Date()
    setFormattedDate(
      date
        .toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
        .replace(/\//g, '-'),
    )
  }, [])

  return { formattedDate }
}

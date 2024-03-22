import React, { useState } from 'react';
import { Exercise, ScrollContent } from '../../components'

function GymScreen() {
  const [count, setCount] = useState(0)
  /**
   * Not sure if I want to fetch data here
   */
  return (
    <ScrollContent>
      <Exercise />
    </ScrollContent>
  )
}

export default GymScreen
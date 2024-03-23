import React from "react"
import DumbellSVG from './dumbell.svg'
import DumbellSVGActive from './dumbbell_active.svg'
import DumbellSVGExerciseCompletedIndicator from './dumbell_completed_exercise_indicator.svg'

export const Dumbell = ({style, isFocused, isCompletedExercise}) => {
  if (isCompletedExercise) {
    return <DumbellSVGExerciseCompletedIndicator style={style} />
  }
  return isFocused
    ? <DumbellSVGActive style={style}/>
    : <DumbellSVG style={style}/>
}
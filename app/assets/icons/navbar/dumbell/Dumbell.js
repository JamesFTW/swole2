import React from "react"
import DumbellSVG from './dumbell.svg'
import DumbellSVGActive from './dumbbell_active.svg'

export const Dumbell = ({style, isFocused}) => {
  return isFocused
    ? <DumbellSVGActive style={style}/>
    : <DumbellSVG style={style}/>
}
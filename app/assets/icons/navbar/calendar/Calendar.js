import React from "react"
import CalendarSVG from './calendar.svg'
import CalendarSVGActive from './calendar_active.svg'

export const Calendar = ({style, isFocused}) => {
  return isFocused
    ? <CalendarSVGActive style={style}/>
    : <CalendarSVG style={style}/>
}
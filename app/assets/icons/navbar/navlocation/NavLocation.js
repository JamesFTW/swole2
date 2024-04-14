import React from 'react'
import NavLocationSVG from './nav_location.svg'
import NavLocationSVGActive from './nav_location_active.svg'

export const NavLocation = ({ style, isFocused }) => {
  return isFocused ? (
    <NavLocationSVGActive style={style} />
  ) : (
    <NavLocationSVG style={style} />
  )
}

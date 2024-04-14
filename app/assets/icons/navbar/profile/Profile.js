import React from 'react'
import ProfileSVG from './profile.svg'
import ProfileSVGActive from './profile_active.svg'

export const Profile = ({ style, isFocused }) => {
  return isFocused ? (
    <ProfileSVGActive style={style} />
  ) : (
    <ProfileSVG style={style} />
  )
}

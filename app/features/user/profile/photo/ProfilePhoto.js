import React from 'react'
import { Image } from '@app/components'

export const ProfilePhoto = ({ style, src }) => {
  //going to want to fetch profile photos in this component
  return <Image src={src} style={style} />
}

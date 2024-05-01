import React, { useContext } from 'react'
import { ProfileContext } from '@app/providers'
const blurhash = 'LHNbb{M|_NM|}NxG]NM|_G|_NwG]G^IYwGbE'

import { FasterImageView } from '@candlefinance/faster-image'

export const ProfilePhoto = ({ style, borderRadius }) => {
  const { profileData } = useContext(ProfileContext)

  return (
    <FasterImageView
      style={style}
      source={{
        transitionDuration: 0.3,
        cachePolicy: 'discWithCacheControl',
        showActivityIndicator: true,
        url: profileData?.userInfo?.profilePhoto,
        resizeMode: 'cover',
      }}
      blurhash={blurhash}
      borderRadius={borderRadius}
    />
  )
}

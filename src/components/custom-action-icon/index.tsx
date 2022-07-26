import { Typography, IconButton } from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import React, { useEffect, useState } from 'react'

interface Props {
  commentsCount: number;
  likes: string[]
}
export const CustomActionIcon = ({ likes, commentsCount }: Props) => {
  const profileId = localStorage.getItem('profileId') as string
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    setLiked(likes.includes(profileId))

  }, [profileId, likes])
  return (
    <div>
      <IconButton> {liked ? (<FavoriteOutlinedIcon></FavoriteOutlinedIcon>) : (<FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>)}</IconButton>
      <Typography variant="caption" color="text.secondary">
        {likes.length}
      </Typography>
      <IconButton><ChatOutlinedIcon /></IconButton>
      <Typography variant="caption" color="text.secondary">
        {commentsCount}
      </Typography>
    </div>
  )
}
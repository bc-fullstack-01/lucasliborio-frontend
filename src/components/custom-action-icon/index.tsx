import { Typography, IconButton } from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import React, { useEffect, useState } from 'react'

import server from '../../api/server';

interface Props {
  commentsCount: number;
  likes: string[]
  postId: string
}
export const CustomActionIcon = ({ likes, commentsCount, postId }: Props) => {
  const profileId = localStorage.getItem('profileId') as string
  const token = localStorage.getItem('accessToken')
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(likes.length)

  useEffect(() => {
    setLiked(likes.includes(profileId))

  }, [profileId])

  const handleLike = async () => {
    try {
      await server.post(`/post/${postId}/like`, null, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      setLiked(!liked)
      if (liked) setLikeCount((likeCount - 1))
      else setLikeCount((likeCount + 1))
    } catch (error) {

    }
  }
  return (
    <div>
      <IconButton onClick={() => handleLike()}> {liked
        ? (<FavoriteOutlinedIcon sx={{ color: 'red' }}></FavoriteOutlinedIcon>)
        : (<FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>)}
      </IconButton>
      <Typography variant="caption" color="text.secondary">
        {likeCount}
      </Typography>

      <IconButton><ChatOutlinedIcon /></IconButton>
      <Typography variant="caption" color="text.secondary">
        {commentsCount}
      </Typography>
    </div>
  )
}
import React from 'react'
import { CardHeader, Divider, Avatar, CardMedia, CardContent, Typography, CardActions, Container, Card } from '@mui/material'
import { Post } from '../../pages/home'
import { CustomActionIcon } from '../custom-action-icon'

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card sx={{ width: 500, marginBottom: '100px' }} >
      <CardHeader
        avatar={<Avatar>{post.profileId.username[0].toLocaleUpperCase()}</Avatar>}
        title={post.profileId.username}
      >
      </CardHeader>
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {post.description}
        </Typography>
      </CardContent>
      {post.hasImage ? (<CardMedia component='img' image={`http://${post.imageUrl}`}></CardMedia>) : null}
      <CardActions>
        <div style={{
          display: "flex",
          alignItems: 'flex-start'
        }}>
          <CustomActionIcon
            commentsCount={post.comments.length}
            likes={post.likes}
          />
        </div>
      </CardActions>
    </Card>
  )
}
import React from 'react'
import { CardHeader, Avatar, CardMedia, CardContent, Typography, CardActions, Card } from '@mui/material'
import { Post } from '../../pages/home'
import { CustomActionIcon } from '../custom-action-icon'


interface Props {
  post: Post,
  handlePostClick: any
}
export const PostCard = ({ post, handlePostClick }: Props ) => {

  return (
    <Card elevation={3} sx={{ width: 500, marginBottom: '100px' }} >
      <div onClick={() => handlePostClick(post._id)}>
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
      </div>
      <CardActions>
        <div style={{
          display: "flex",
          alignItems: 'flex-start'
        }}>
          <CustomActionIcon
            commentsCount={post.comments.length}
            likes={post.likes}
            postId={post._id}
          />
        </div>
      </CardActions>
    </Card>
  )
}
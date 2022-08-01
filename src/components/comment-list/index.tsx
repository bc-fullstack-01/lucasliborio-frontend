import React from "react"
import { Avatar, TextField, Button, Stack, List, ListItem, ListItemAvatar, ListItemText, Divider } from "@mui/material"
import { useState } from "react"
import server from "../../api/server"
import { Post } from "../../pages/home"
import { Comment } from '../../pages/post-detail'

interface Props {
  postId?: string
  comments: Comment[]
  onAddComment: any
}

export const CommentList = ({ postId, comments, onAddComment }: Props) => {
  const [comment, setComment] = useState<string>('')
  const handlePublishComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const postComment = async () => {
      console.log(comments)
      try {
        const response = await server.post(`/post/${postId}/comment`, {
          content: comment
        }, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        const commentToadd = response.data as Comment
        setComment('')
        onAddComment((p: Post) => ({ ...p, comments: [...p?.comments , commentToadd] }))
      } catch (error) {

      }
    }
    postComment()
  }
  return (
    <>
      <Stack
        direction='column'
        sx={{ width: '100%', justifyContent: 'center' }}
        component='form'
        onSubmit={handlePublishComment}
        spacing={3}
      >
        <div style={{ width: '100%' }}>
          <TextField
            fullWidth={true}
            sx={{ maxWidth: '100%' }}
            id="outlined-multiline-flexible"
            label="comment comes here"
            multiline
            value={comment}
            onChange={(e) => { setComment(e.target.value) }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="submit" variant="contained">Comment</Button>
        </div>
        <List>
          {comments && comments.map((c) => (
            <div key={c._id}>
              <ListItem >
                <ListItemAvatar>
                  <Avatar>{c.profileId.username[0].toLocaleUpperCase()}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={c.profileId.username}
                  secondary={c.content}
                />
              </ListItem>
              <Divider variant="inset" />
            </div>
          ))}
        </List>
      </Stack>
    </>
  )
}
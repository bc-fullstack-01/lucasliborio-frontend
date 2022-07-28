import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import server from '../../api/server';
import { CommentList } from '../../components/comment-list';
import { CustomContainer } from '../../components/container/container';
import { CustomNavBar } from '../../components/custom-navbar';
import { PostCard } from '../../components/post-card';
import { Post } from '../home';

export interface Comment {
  _id: string
  content: string,
  likes: string[]
  postId: string,
  profileId: {
    _id: string,
    username: string
  }
}

export const PostDetail = () => {

  const { postId } = useParams();
  const token = localStorage.getItem('accessToken') as string
  const [post, setPost] = useState<Post>()
  console.log(post)
  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await server.get(`/post/${postId}`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        console.log(response.data)
        setPost(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getPost()
  }, [token])

  return (
    <>
      <CustomNavBar title='Post' />
      <CustomContainer >
        {post && <PostCard post={post} handlePostClick={() => { }} />}
        <CommentList postId={postId} comments={post?.comments as Comment[]} onAddComment={setPost}/>
      </CustomContainer>
    </>

  )
}
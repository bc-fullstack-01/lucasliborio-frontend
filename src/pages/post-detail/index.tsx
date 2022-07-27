import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import server from '../../api/server';
import { CustomContainer } from '../../components/container/container';
import { CustomNavBar } from '../../components/custom-navbar';
import { PostCard } from '../../components/post-card';
import { Post } from '../home';


export const PostDetail = () => {

  const { postId } = useParams();
  const token = localStorage.getItem('accessToken') as string
  const [post, setPost] = useState<Post>()

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await server.get(`/post/${postId}`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        setPost(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getPost()
  }, [token, post])

  return (

    <CustomContainer >
      <CustomNavBar title='Post' />
      {post && <PostCard post={post} handlePostClick={() => { }} />}
    </CustomContainer>

  )
}
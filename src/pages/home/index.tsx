import { Container, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import server from "../../api/server";
import { CustomNavBar } from "../../components/custom-navbar";
import { PostCard } from "../../components/post-card";

export interface comment {
  _id: string,
  content: string,
  likes: string[]
}
export interface Post {
  _id: string
  title: string
  description: string
  profileId: {
    _id: string
    username: string,
  }
  likes: string[]
  hasImage: boolean
  imageUrl: string
  comments: comment[]
}

export const HomePage = () => {
  const token = localStorage.getItem('accessToken')
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    const getPosts = async () => {
      try {

        const response = await server.get('/feed', {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        setPosts(response.data)
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getPosts()
  }, [token])

  return (
    <div>
      <CustomNavBar title="Home" />
      <Container sx={{ display: 'flex', marginTop: '100px', flexDirection: 'column', alignItems: 'center' }}>
        {posts.map(post => (
          <div key={post._id}>
            <PostCard post={post} />
          </div>
        ))}
      </Container>
    </div>
  )
}
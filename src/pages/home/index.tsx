import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import InfiniteScrolls from "react-infinite-scroll-component";

import { CustomNavBar } from "../../components/custom-navbar";
import { PostCard } from "../../components/post-card";
import server from "../../api/server";
import { useNavigate } from "react-router-dom";
import { CustomContainer } from "../../components/container/container";

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
  const navigate = useNavigate()
  const token = localStorage.getItem('accessToken')
  const [posts, setPosts] = useState<Post[]>([])
  const [page, setPage] = useState<number>(0)
  let hasMore = true


  const handlePostClick = (postId: string) => {
    navigate(`/posts/${postId}`)
  }

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await server.get(`/feed/?page=${page}`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        hasMore = response.data.length > 0 ? true : false

        setPosts(p => [...p, ...response.data])
        console.log("RESPONDE DATA", response.data)
        console.log("STATE POST ", posts)
        console.log("PAGE", page)
        console.log("hasMore", hasMore)
      } catch (err) {
        console.log(err)
      }
    }
    getPosts()
  
  }, [token, page])
  
  console.log("POSTS", posts)
  const loadMorePosts = () => {
    setPage(page + 1)
  }
  return (
    <>
      <CustomNavBar title="Home" />
      <CustomContainer>
        <InfiniteScrolls
          dataLength={posts.length}
          next={loadMorePosts}
          hasMore={hasMore}
          loader={<Typography>Loading...</Typography>}
        >
          {posts && posts.map((post: Post) => (
            <div key={post._id}>
              <PostCard handlePostClick={handlePostClick} post={post} />
            </div>
          ))}
        </InfiniteScrolls>
      </CustomContainer>
    </>
  )
}
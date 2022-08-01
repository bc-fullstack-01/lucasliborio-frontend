import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import InfiniteScrolls from "react-infinite-scroll-component";

import { CustomNavBar } from "../../components/custom-navbar";
import { PostCard } from "../../components/post-card";
import server from "../../api/server";
import { useNavigate } from "react-router-dom";
import { CustomContainer } from "../../components/container/container";

export interface Comment {
  _id: string,
  content: string,
  likes: string[],
  profileId: {
    _id: string,
    username: string
  }
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
  comments: Comment[] | string
}

export const HomePage = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('accessToken')
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [posts, setPosts] = useState<Post[]>([])
  const [page, setPage] = useState<number>(0)


  const loadMorePosts = () => {
    setPage(page + 1)
  }
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
        console.log(response.data.length)
        setHasMore(response.data.length !== 0)
        setPosts(p => [...p, ...response.data])
        /* console.log("RESPONDE DATA", response.data)
        console.log("STATE POST ", posts)
        console.log("PAGE", page)
        console.log("hasMore", hasMore) */
        console.log(hasMore)
      } catch (err) {
        console.log(err)
      }
    }

    getPosts()

  }, [token, page, hasMore])

  return (
    <>
      <CustomNavBar title="Home" />

      <InfiniteScrolls

        style={{ maxWidth: '100%' }}
        dataLength={posts.length}
        next={loadMorePosts}
        hasMore={hasMore}
        loader={(<Typography>Loading...</Typography>)}
      >
        <CustomContainer>
          <Stack
            width='100%'
          >
          {posts && posts.map((post: Post) => (
            <div key={post._id}>
              <PostCard handlePostClick={handlePostClick} post={post} />
            </div>
          ))}
          </Stack>
        </CustomContainer>
      </InfiniteScrolls>


    </>
  )
}
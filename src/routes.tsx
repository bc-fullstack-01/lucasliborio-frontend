import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';
import { SignupPage } from './pages/signup'
import { ProfilePage } from './pages/profile';
import { ProfilesPage } from './pages/profiles';
import { NewPostPage } from './pages/new-post';
import { PostDetail } from './pages/post-detail';
export const PagesRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/new-post" element={<NewPostPage />}></Route>
      <Route path="/profiles" element={<ProfilesPage />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
      <Route path="/posts/:postId" element={<PostDetail/>}></Route>
    </Routes>
  )
}
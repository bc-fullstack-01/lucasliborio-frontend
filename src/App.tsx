import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';
import { SignupPage} from './pages/signup'
import { ProfilePage } from './pages/profile';
import { ProfilesPage } from './pages/profiles';
import { NewPostPage } from './pages/new-post';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/new-post" element={<NewPostPage/>}></Route>
        <Route path ="/profiles" element={<ProfilesPage/>}></Route>
        <Route path="/profile" element={<ProfilePage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { HomePage } from './pages/home';
import { SigninPage } from './pages/signin';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigninPage />}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;

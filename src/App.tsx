import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';
import { SignupPage} from './pages/signup'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;

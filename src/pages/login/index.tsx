import React, { useState } from "react"
import server from "../../api/server"
import jwt from "jwt-decode"
import { useNavigate } from "react-router-dom"
import { AuthForm } from "../../components/auth-form"

interface TokenUser {
  profileId: string,
  user: string
}

export const LoginPage = () => {
  const navigate = useNavigate()

  const handleLogin = async ({email, password}:any) => {
    try {
      const response = await server.post('/login', {
        email:email.value,
        password: password.value
      })
      console.log(await response.data)
      const { accessToken } = await response.data
      const decoded = jwt(accessToken) as TokenUser
      Object.assign(decoded, { accessToken })
      Object.entries(decoded).map(([key, value]) => {
        localStorage.setItem(key, value as string)
      })
      navigate('/home')
    } catch (error) {
      alert('não foi possivel logar o usuario')
    } 
  }
  return (
    <AuthForm
      fieldsToRender={['email', 'password']}
      onSubmitForm={handleLogin}
      buttonLink="/signup"
      buttonLabel="Login"
      linkText="Don't have an account? Click Here" 
    />
  )
}
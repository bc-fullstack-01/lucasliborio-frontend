import React, { useState } from "react"
import server from "../../api/server"
import jwt from "jwt-decode"
import { useNavigate } from "react-router-dom"
import { AuthForm } from "../../components/AuthForm"

interface TokenUser {
  profileId: string,
  user: string
}

export const SigninPage = () => {
  const navigate = useNavigate()

  const handleLogin = async (email: string, password: string) => {
    console.log(email, password)
    const response = await server.post('/login', {
      email,
      password
    })
    console.log(await response.data)
    const { accessToken } = await response.data
    const decoded = jwt(accessToken) as TokenUser
    Object.assign(decoded, { accessToken })
    Object.entries(decoded).map(([key, value]) => {
      localStorage.setItem(key, value as string)
    })
    navigate('/home')
  }
  return (
    <AuthForm
      onSubmitForm={handleLogin}
      buttonLink="/signup"
      buttonLabel="Login"
      linkText='Não tem uma conta, faça seu cadastro'
    />
  )
}
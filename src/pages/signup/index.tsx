import React from "react"
import server from "../../api/server"
import { useNavigate } from "react-router-dom"
import { AuthForm } from "../../components/auth-form"


export const SignupPage = () => {
  const navigate = useNavigate()

  const handleLogin = async (userData:any) => {

    const response = await server.post('/signin', {
      userData
    })
    navigate('/signin')
  }
  return (
    <AuthForm
      fieldsToRender={['username','email','password','passwordConfirmation']}
      onSubmitForm={handleLogin}
      buttonLink="/"
      buttonLabel="Login"
      linkText="Already have an account? Log in now" 
    />
  )
}
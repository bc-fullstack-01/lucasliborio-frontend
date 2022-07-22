import React from "react"
import server from "../../api/server"
import { useNavigate } from "react-router-dom"
import { AuthForm } from "../../components/auth-form"


export const SignupPage = () => {
  const navigate = useNavigate()

  const handleSignup = async ({ username, email, password, passwordConfirmation }: any) => {
    try {
      const response = await server.post('/signup', {
        username: username.value,
        email: email.value,
        password: password.value,
        passwordConfirmation: passwordConfirmation.value
      })
      navigate('/')
      console.log(response)
    } catch (error) {
      alert('não possivel cadastrar um usuario')
    }

  }
  return (
    <AuthForm
      fieldsToRender={['username', 'email', 'password', 'passwordConfirmation']}
      onSubmitForm={handleSignup}
      buttonLink="/"
      buttonLabel="Login"
      linkText="Already have an account? Log in now"
    />
  )
}
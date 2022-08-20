import React, { useState } from "react"
import server from "../../api/server"
import { useNavigate } from "react-router-dom"
import { AuthForm } from "../../components/auth-form"


export const SignupPage = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const handleSignup = async ({ username, email, password, passwordConfirmation }: any) => {
  console.log(error)
    try {
      const response = await server.post('/signup', {
        username: username.value,
        email: email.value,
        password: password.value,
        passwordConfirmation: passwordConfirmation.value
      })
      navigate('/')
      console.log(response)
    } catch (error: any) {
      setError(error.response)
      alert('não possivel cadastrar um usuario')
    }

  }
  return (
    <AuthForm
      error={[error, setError]}
      fieldsToRender={['username', 'email', 'password', 'passwordConfirmation']}
      onSubmitForm={handleSignup}
      buttonLink="/"
      buttonLabel="Login"
      linkText="Already have an account? Log in now"
    />
  )
}
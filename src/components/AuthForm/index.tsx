import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { TextField, Button, Container, Stack } from '@mui/material'



interface Props {
  onSubmitForm: any
  buttonLabel: string
  buttonLink: string,
  linkText: string
}

export const AuthForm = ({
  onSubmitForm,
  buttonLabel,
  buttonLink,
  linkText
}: Props) => {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onSubmitForm(email.value, password.value)
  }
  return (

    <Container maxWidth="xs">
      <h1>SignIn</h1>
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <Stack
          spacing={6}
          justifyContent="center"
          alignItems="stretch"
        >
          <TextField
            onChange={(e) => setEmail({ value: e.target.value, error: 'none' })}
            name="email" value={email.value}
            variant="outlined"
            label="Email"
          ></TextField>

          <TextField
            onChange={(e) => setPassword({ value: e.target.value, error: 'none' })}
            name="password" value={password.value}
            type="password" variant="outlined"
            label="Password">
          </TextField>

          <Button sx={{
            width: '100%'
          }} type="submit" variant="contained">{buttonLabel}</Button>
          <Link to={buttonLink}>{linkText}</Link>
        </Stack>
      </form>
    </Container>

  )
}
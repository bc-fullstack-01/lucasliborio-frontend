import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { TextField, Button, Container, Stack, Box } from '@mui/material'
import './index.css'


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
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <Stack
          spacing={5}
          justifyContent="center"
          textAlign='center'
          alignItems="strech"
          
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

          <Button type="submit" variant="contained">{buttonLabel}</Button>
          <Link to={buttonLink}>{linkText}</Link>
        </Stack>
      </form>
    </Container >
  )
}
import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { TextField, Button, Container, Stack, Box } from '@mui/material'
import './index.css'
import logo from '../../assets/logo.svg'

interface Props {
  fieldsToRender: any
  onSubmitForm: any
  buttonLabel: string
  buttonLink: string,
  linkText: string
}


export const AuthForm = ({
  fieldsToRender,
  onSubmitForm,
  buttonLabel,
  buttonLink,
  linkText
}: Props) => {

  const objectForm: any = {}
  fieldsToRender.map((field: string) => Object.assign(objectForm, { [field]: '' }))
  const [userData, setUserData] = useState(objectForm)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmitForm(userData)
  }
  return (
    <Container maxWidth="xs">
      <form onSubmit={(e) => { handleSubmit(e) }}>

        <Stack
          spacing={5}
          textAlign='center'
          alignContent='strech'
          alignItems="strech"
        >
          <Container>
            <img
              id="form-logo"
              src={logo}>
            </img>
          </Container>
          {fieldsToRender.map((field: string, index: number) => (
            <TextField
              key={index.toString()}
              name={field}
              value={userData[field]}
              variant="outlined"
              label={field.toUpperCase()}
              type={field.includes('password') ? 'password' : field}
              onChange={(e) => { setUserData({ ...userData, [e.target.name]: e.target.value }) }}
            ></TextField>
          ))}
          <Button
            type="submit"
            variant="contained">
            {buttonLabel}
          </Button>
          <Link
            className="link-action"
            to={buttonLink}>
            <Button
              variant="outlined">
              {linkText}
            </Button>
          </Link>
        </Stack>
      </form>
    </Container >
  )
}
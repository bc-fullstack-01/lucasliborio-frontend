import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { TextField, Button, Container, Stack, Alert } from '@mui/material'
import './index.css'
import logo from '../../assets/logo.svg'
import { CustomContainer } from "../container/container";

interface Props {
  fieldsToRender: any
  onSubmitForm: any
  buttonLabel: string
  buttonLink: string,
  linkText: string,
  error: [any, React.Dispatch<React.SetStateAction<any>>]
}
interface inputsProperty {
  value?: string,
  error?: {
    text: any
    isError: boolean
  }
}

export const AuthForm = ({
  fieldsToRender,
  onSubmitForm,
  buttonLabel,
  buttonLink,
  linkText,
  error
}: Props) => {

  type FormFields = {
    [x: string]: inputsProperty
  }
  const objectForm: FormFields = {}
  fieldsToRender.map((field: string) => Object.assign(objectForm, { [field]: { value: '', error: '' } }))
  const [userData, setUserData] = useState<FormFields>(objectForm)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmitForm(userData)
    setTimeout(() => {
      error[1](null)
    }, 2000)
  }

  return (
    <CustomContainer>
      <Stack
        component='form'
        onSubmit={handleSubmit}
        spacing={5}
        textAlign="center"
        width='50%'
      >
        <Container
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <img
            alt="gorgeous bird"
            id="form-logo"
            src={logo}>

          </img>
        </Container>
        {fieldsToRender.map((field: string, index: number) => (
          <TextField
            error={userData[field].error?.isError}
            helperText={userData[field].error?.text}
            key={index.toString()}
            name={field}
            value={userData[field].value}
            variant="outlined"
            label={field.toUpperCase()}
            type={field.includes('password') ? 'password' : field}
            onChange={(e) => { setUserData({ ...userData, [e.target.name]: { value: e.target.value } }) }}
          ></TextField>
        ))}
        <Button
          style={{ width: '100%' }}
          type="submit"
          variant="contained">
          {buttonLabel}
        </Button>

        {error[0] && <Alert severity="error">{error[0]?.data.error}</Alert>}
        <Link
          className="link-action"
          to={buttonLink}>
          <Button
            style={{ width: '100%' }}
            variant="outlined">
            {linkText}
          </Button>
        </Link>
      </Stack>

    </CustomContainer>
  )
}

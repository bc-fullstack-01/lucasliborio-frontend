import React, {useState } from "react";
import { Link } from 'react-router-dom'
import { Link as LinkUI, TextField, Button, Container, Stack} from '@mui/material'
import './index.css'


interface Props {
  fieldsToRender: any
  onSubmitForm: any
  buttonLabel: string
  buttonLink: string,
  linkText: string
}
type ObjectForm<Type> = {
  [Property in keyof Type]: Type[Property]
}

export const AuthForm = ({
  fieldsToRender,
  onSubmitForm,
  buttonLabel,
  buttonLink,
  linkText
}: Props) => {
  
  type OptionsFlags<Type> = {
    [Property in keyof Type]: string;
  };
  type UserForm = OptionsFlags<typeof fieldsToRender>
  const objectForm = {}
  fieldsToRender.map((field:string) => Object.assign(objectForm, {[field]:''}))
  const [userData, setUserData] = useState<UserForm>(objectForm)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmitForm(userData)
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
          {fieldsToRender.map((field:string, index: number) => (
            <TextField
            key={index.toString()}
            name={field}
            value={userData[field]}
            variant="outlined"
            label={field.toUpperCase()}
            type={field}
            onChange={(e) => {setUserData({...userData, [e.target.name]: e.target.value})}}
          ></TextField>
        ))}
          <Button type="submit" variant="contained">{buttonLabel}</Button>
          <Link className="link-action"to={buttonLink}><Button variant="outlined">{linkText}</Button></Link>
        </Stack>
      </form>
    </Container >
  )
}
import React from "react"
import { Box, TextField, Button, Container, Stack } from '@mui/material'
export const SigninPage = () => {
  return (
    <Container maxWidth="xs">
      <h1>SignIn</h1>
      <Box>
        <Stack spacing={4}>
          <TextField variant="outlined" label="email"></TextField>
          <TextField variant="outlined" label="password"></TextField>
          <Button variant="contained">LogIn</Button>
        </Stack>
      </Box>
    </Container>
  )
}
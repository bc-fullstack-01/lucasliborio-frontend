import { Container } from "@mui/material"

interface Props {
  children: any
}
export const CustomContainer = ({ children }: Props) => {
  return (
    <Container maxWidth='sm' sx={{ display: 'flex', marginTop: '80px', flexDirection: 'row', justifyContent: 'center'}}>
      {children}
    </Container>
  )
}
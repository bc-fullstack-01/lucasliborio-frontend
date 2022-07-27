import { Container } from "@mui/material"

interface Props {
  children: any
}
export const CustomContainer = ({ children }: Props) => {
  return (
    <Container sx={{ display: 'flex', marginTop: '100px', flexDirection: 'column', alignItems: 'center' }}>
      {children}
    </Container>
  )
}
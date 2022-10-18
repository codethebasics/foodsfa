import styled from 'styled-components'

import { useRouter } from 'next/router'

const LoginContainer = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  max-width: 350px;
  margin: auto;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;

  img {
    height: 60px;
  }
`

const FormControl = styled.div`
  padding: 5px;
`

const Label = styled.label`
  font-size: 0.8rem;
  color: #999;
`

const Input = styled.input`
  background-color: transparent;
  border: 1px solid #999;
  width: 100%;
  border-radius: 4px;
  padding: 5px;
  outline: none;
`

const Button = styled.button`
  padding: 5px;
  width: 100%;
  background: yellow;
  color: #222;
  margin-top: 15px;
  border-radius: 4px;
`

export default function EstabelecimentoAdmin() {
  const router = useRouter()

  const routeToAdminDashboard = () => {
    router.push('/admin/estabelecimento/new')
  }

  return (
    <LoginContainer>
      <ImageContainer>
        <img src={'/img/logo-label.svg'} alt={'foodsfa'} />
      </ImageContainer>
      <FormControl>
        <Label>Usuário</Label>
        <Input />
      </FormControl>
      <FormControl>
        <Label>Senha</Label>
        <Input type={'password'} />
      </FormControl>
      <FormControl>
        <Button onClick={routeToAdminDashboard}>Entrar</Button>
      </FormControl>
    </LoginContainer>
  )
}

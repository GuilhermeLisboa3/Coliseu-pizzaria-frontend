import { Container, Hyperlink } from './style'
import { Input, Button, Toast } from '@/application/components'
import imgSignup from '@/application/assets/img-signup.jpg'
import logo from '@/application/assets/logo.png'

import React from 'react'

export const SignUp = (): JSX.Element => {
  return (
    <>
      <Container>
        <main>
          <img src={imgSignup.src} alt="" />
          <div>
            <img src={logo.src} alt="logo" />
            <form action="">
              <Input placeholder="Name" type='text' name='name'/>
              <Input placeholder="Email" type='email' name='email'/>
              <Input placeholder="Senha" type='password' name='password'/>
              <Input placeholder="Confirma senha" type='password' name='passwordConfirmation'/>
              <Button type='submit' disabled={true}>Cadastre-se</Button>
            </form>
            <p>Já tem uma conta? <Hyperlink href={'/login'}>Entrar</Hyperlink></p>
          </div>
        </main>
      </Container>
      <Toast message='error'/>
    </>
  )
}

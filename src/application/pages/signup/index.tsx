import { Container, Hyperlink } from './style'
import { Input, Button, Toast } from '@/application/components'
import { type Validator } from '@/application/validation'
import imgSignup from '@/application/assets/img-signup.jpg'
import logo from '@/application/assets/logo.png'

import React, { useEffect, useState } from 'react'

type Props = { validation: Validator }

export const SignUp: React.FC<Props> = ({ validation }): JSX.Element => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  useEffect(() => { validation.validate('name', { name }) }, [name])
  useEffect(() => { validation.validate('email', { email }) }, [email])
  useEffect(() => { validation.validate('password', { password }) }, [password])
  useEffect(() => { validation.validate('passwordConfirmation', { password, passwordConfirmation }) }, [passwordConfirmation])

  return (
    <>
      <Container>
        <main>
          <img src={imgSignup.src} alt="" />
          <div>
            <img src={logo.src} alt="logo" />
            <form action="">
              <Input placeholder="Name" type='text' name='name' setState={setName}/>
              <Input placeholder="Email" type='email' name='email' setState={setEmail}/>
              <Input placeholder="Senha" type='password' name='password' setState={setPassword}/>
              <Input placeholder="Confirma senha" type='password' name='passwordConfirmation' setState={setPasswordConfirmation}/>
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

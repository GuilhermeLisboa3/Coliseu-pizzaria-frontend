import { Container, Hyperlink } from './style'
import { Input, Button, Toast } from '@/application/components'
import { type Validator } from '@/application/validation'
import imgSignup from '@/application/assets/img-signup.jpg'
import logo from '@/application/assets/logo.png'

import React, { useEffect, useState } from 'react'

type Props = { validation: Validator }

export const SignUp: React.FC<Props> = ({ validation }): JSX.Element => {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState<string | undefined>('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState<string | undefined>('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState<string | undefined>('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [passwordConfirmationError, setPasswordConfirmationError] = useState<string | undefined>('')

  useEffect(() => { setNameError(validation.validate('name', { name })) }, [name])
  useEffect(() => { setEmailError(validation.validate('email', { email })) }, [email])
  useEffect(() => { setPasswordError(validation.validate('password', { password })) }, [password])
  useEffect(() => { setPasswordConfirmationError(validation.validate('passwordConfirmation', { password, passwordConfirmation })) }, [passwordConfirmation])

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
              <Button type='submit' disabled={!!nameError || !!emailError || !!passwordError || !!passwordConfirmationError}>Cadastre-se</Button>
            </form>
            <p>Já tem uma conta? <Hyperlink href={'/login'}>Entrar</Hyperlink></p>
          </div>
        </main>
      </Container>
      <Toast message='error'/>
    </>
  )
}

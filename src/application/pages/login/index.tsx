'use client'
import { Container, Hyperlink } from './style'
import { Input, Button, Spinner } from '@/application/components'
import imgLogin from '@/application/assets/img-login.jpg'
import logo from '@/application/assets/logo.png'

import React, { useState } from 'react'

export const Login: React.FC = (): JSX.Element => {
  const [loading] = useState(false)

  const [, setEmail] = useState('')
  const [emailError] = useState<string | undefined>('')
  const [, setPassword] = useState('')
  const [passwordError] = useState<string | undefined>('')

  return (
    <>
      <Container>
        <main>
          <img src={imgLogin.src} alt="" />
          <div>
            <img src={logo.src} alt="logo" />
            <form data-testid='form'>
              <Input placeholder="Email" type='email' name='email' setState={setEmail}/>
              <Input placeholder="Senha" type='password' name='password' setState={setPassword}/>
              <Button type='submit' disabled={!!emailError || !!passwordError}>
                { loading ? <Spinner/> : 'Entrar' }
              </Button>
            </form>
            <p>Ainda não possui uma conta? <Hyperlink href={'/signup'}>Crie uma!</Hyperlink></p>
          </div>
        </main>
      </Container>
    </>
  )
}

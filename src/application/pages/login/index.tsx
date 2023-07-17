'use client'
import { Authentication } from '@/application/layouts'
import { Input, Button, Spinner } from '@/application/components'
import { type Validator } from '@/application/validation'
import imgLogin from '@/application/assets/img-login.jpg'
import logo from '@/application/assets/logo.png'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

type Props = { validation: Validator }

export const Login: React.FC<Props> = ({ validation }): JSX.Element => {
  const [loading] = useState(false)

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState<string | undefined>('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState<string | undefined>('')

  useEffect(() => { setEmailError(validation.validate('email', { email })) }, [email])
  useEffect(() => { setPasswordError(validation.validate('password', { password })) }, [password])

  return (
    <>
      <Authentication>
        <main>
          <img src={imgLogin.src} alt="" />
          <div>
            <img src={logo.src} alt="logo" />
            <form data-testid='form'>
              <Input placeholder="Email" type='email' name='email' setState={setEmail}/>
              <Input placeholder="Senha" type='password' name='password' setState={setPassword}/>
              <Button type='submit' disabled={!!passwordError || !!emailError}>
                { loading ? <Spinner/> : 'Entrar' }
              </Button>
            </form>
            <p>Ainda não possui uma conta? <Link href={'/signup'}>Crie uma!</Link></p>
          </div>
        </main>
      </Authentication>
    </>
  )
}

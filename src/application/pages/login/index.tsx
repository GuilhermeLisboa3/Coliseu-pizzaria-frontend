'use client'
import { Authentication } from '@/application/layouts'
import { Input, Button, Spinner } from '@/application/components'
import imgLogin from '@/application/assets/img-login.jpg'
import logo from '@/application/assets/logo.png'

import React, { useState } from 'react'
import Link from 'next/link'

export const Login: React.FC = (): JSX.Element => {
  const [loading] = useState(false)

  const [, setEmail] = useState('')
  const [, setPassword] = useState('')

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
              <Button type='submit' disabled={true}>
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

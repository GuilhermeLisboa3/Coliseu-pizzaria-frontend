'use client'
import { AuthenticationLayout } from '@/application/layouts'
import { Input, Button, Spinner } from '@/application/components'
import { type Validator } from '@/application/validation'
import { type Authentication } from '@/domain/use-cases/account'
import imgLogin from '@/application/assets/img-login.jpg'
import logo from '@/application/assets/logo.png'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify'

type Props = { validation: Validator, authentication: Authentication }

export const Login: React.FC<Props> = ({ validation, authentication }): JSX.Element => {
  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState<string | undefined>('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState<string | undefined>('')

  useEffect(() => { setEmailError(validation.validate('email', { email })) }, [email])
  useEffect(() => { setPasswordError(validation.validate('password', { password })) }, [password])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (loading || emailError || passwordError) return
      setLoading(true)
      await authentication({ email, password })
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <>
      <AuthenticationLayout>
        <main>
          <img src={imgLogin.src} alt="" />
          <div>
            <img src={logo.src} alt="logo" />
            <form onSubmit={handleSubmit} data-testid='form'>
              <Input placeholder="Email" type='email' name='email' setState={setEmail}/>
              <Input placeholder="Senha" type='password' name='password' setState={setPassword}/>
              <Button type='submit' disabled={!!passwordError || !!emailError}>
                { loading ? <Spinner/> : 'Entrar' }
              </Button>
            </form>
            <p>Ainda não possui uma conta? <Link href={'/signup'}>Crie uma!</Link></p>
          </div>
        </main>
      </AuthenticationLayout>
    </>
  )
}

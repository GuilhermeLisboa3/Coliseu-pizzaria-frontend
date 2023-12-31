'use client'
import { AuthenticationLayout } from '@/application/layouts'
import { Input, Button, Spinner } from '@/application/components'
import { type Validator } from '@/application/validation'
import { type Authentication } from '@/domain/use-cases/account'
import { AccountContext } from '@/application/contexts'
import imgLogin from '@/application/assets/login/img-login.jpg'
import logo from '@/application/assets/logo.png'

import React, { useEffect, useState, useContext } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

type Props = { validation: Validator, authentication: Authentication }

export const Login: React.FC<Props> = ({ validation, authentication }): JSX.Element => {
  const { setCurrentAccount } = useContext(AccountContext)
  const { push } = useRouter()
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
      const account = await authentication({ email, password })
      setCurrentAccount(account)
      push('/')
    } catch (error: any) {
      setLoading(false)
      toast.error(error.message)
    }
  }

  return (
    <>
      <AuthenticationLayout>
        <main>
          <aside>
            <img src={imgLogin.src} alt="" />
          </aside>
          <div>
            <Link href={'/'}>
              <img src={logo.src} alt="logo" />
            </Link>
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

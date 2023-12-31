'use client'
import { AuthenticationLayout } from '@/application/layouts'
import { Input, Button, Spinner } from '@/application/components'
import { type Validator } from '@/application/validation'
import { type AddAccount } from '@/domain/use-cases/account'
import imgSignup from '@/application/assets/signup/img-signup.jpg'
import logo from '@/application/assets/logo.png'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import Link from 'next/link'

type Props = { validation: Validator, addAccount: AddAccount }

export const SignUp: React.FC<Props> = ({ validation, addAccount }): JSX.Element => {
  const { push } = useRouter()
  const [loading, setLoading] = useState(false)

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (loading || nameError || emailError || passwordError || passwordConfirmationError) return
      setLoading(true)
      await addAccount({ name, email, password })
      push('/login')
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
            <img src={imgSignup.src} alt="" />
          </aside>
          <div>
            <Link href={'/'}>
              <img src={logo.src} alt="logo" />
            </Link>
            <form onSubmit={handleSubmit} data-testid='form'>
              <Input placeholder="Name" type='text' name='name' setState={setName}/>
              <Input placeholder="Email" type='email' name='email' setState={setEmail}/>
              <Input placeholder="Senha" type='password' name='password' setState={setPassword}/>
              <Input placeholder="Confirma senha" type='password' name='passwordConfirmation' setState={setPasswordConfirmation}/>
              <Button type='submit' disabled={!!nameError || !!emailError || !!passwordError || !!passwordConfirmationError}>
                { loading ? <Spinner/> : 'Cadastre-se' }
              </Button>
            </form>
            <p>Já tem uma conta? <Link href={'/login'}>Entrar</Link></p>
          </div>
        </main>
      </AuthenticationLayout>
    </>
  )
}

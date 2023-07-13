import { FormInput, Container, Hyperlink } from './style'
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
              <FormInput>
                <input placeholder=" " id={'name'} autoComplete="off" type='text'/>
                <label htmlFor={'name'}>Nome</label>
              </FormInput>
              <FormInput>
                <input placeholder=" " id={'email'} autoComplete="off" type='email'/>
                <label htmlFor={'email'}>Email</label>
              </FormInput>
              <FormInput>
                <input placeholder=" " id={'password'} autoComplete="off" type='password'/>
                <label htmlFor={'password'}>Senha</label>
              </FormInput>
              <FormInput>
                <input placeholder=" " id={'passwordConfirmation'} autoComplete="off" type='password'/>
                <label htmlFor={'passwordConfirmation'}>Confirma senha</label>
              </FormInput>
              <button>Registrar</button>
            </form>
            <p>Já tem uma conta? <Hyperlink href={'/login'}>Entrar</Hyperlink></p>
          </div>
        </main>
      </Container>
    </>
  )
}

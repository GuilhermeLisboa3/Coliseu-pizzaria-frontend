'use client'
import { Login } from '@/application/pages'
import { makeAuthentication } from '@/main/factories/domain/use-cases/account'
import { makeLoginValidation } from '@/main/factories/application/validation'

export const MakeLogin: React.FC = () => (
  <Login authentication={makeAuthentication()} validation={makeLoginValidation()}/>
)

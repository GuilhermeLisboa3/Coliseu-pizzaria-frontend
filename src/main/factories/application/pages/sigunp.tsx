'use client'
import { SignUp } from '@/application/pages'
import { makeAddAccount } from '@/main/factories/domain/use-cases/account'
import { makeSignUpValidation } from '@/main/factories/application/validation'

export const MakeSignUp: React.FC = () => (
  <SignUp addAccount={makeAddAccount()} validation={makeSignUpValidation()}/>
)

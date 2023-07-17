import { Login } from '@/application/pages'
import { populateField, AccountParams } from '@/tests/mocks'
import { type Validator } from '@/application/validation'

import { render, screen } from '@testing-library/react'
import { mock } from 'jest-mock-extended'
import React from 'react'

describe('Login', () => {
  const { email, password, error } = AccountParams
  const validator = mock<Validator>()

  const makeSut = (): void => {
    render(
      <>
        <Login validation={validator}/>
      </>
    )
  }

  const populateFields = (): void => {
    populateField('email', email)
    populateField('password', password)
  }

  it('should load with correct initial state', () => {
    validator.validate.mockReturnValueOnce(error)

    makeSut()

    expect(screen.getByText('Entrar')).toBeTruthy()
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('should call validation with correct values', () => {
    makeSut()

    populateFields()

    expect(validator.validate).toHaveBeenCalledWith('email', { email })
    expect(validator.validate).toHaveBeenCalledWith('password', { password })
  })

  it('should disable button if form if Validation fails', () => {
    makeSut()
    validator.validate.mockReturnValueOnce(error).mockReturnValueOnce(error).mockReturnValueOnce(error).mockReturnValueOnce(error)

    populateFields()

    expect(screen.getByRole('button')).toBeDisabled()
  })
})

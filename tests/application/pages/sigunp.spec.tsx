import { populateField, AccountParams } from '@/tests/mocks'
import { SignUp } from '@/application/pages'
import { type Validator } from '@/application/validation'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { mock } from 'jest-mock-extended'
import React from 'react'

describe('SignUp', () => {
  const { name, email, password, passwordConfirmation, error } = AccountParams
  const validator = mock<Validator>()
  const addAccount = jest.fn()

  const makeSut = (): void => {
    render(
      <SignUp validation={validator} addAccount={addAccount}/>
    )
  }

  const populateFields = (): void => {
    populateField('name', name)
    populateField('email', email)
    populateField('password', password)
    populateField('passwordConfirmation', passwordConfirmation)
  }

  const simulateSubmit = (): void => {
    populateFields()
    fireEvent.click(screen.getByRole('button'))
  }

  it('should load with correct initial state', () => {
    validator.validate.mockReturnValueOnce(error)

    makeSut()

    expect(screen.getByText('Cadastre-se')).toBeTruthy()
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('should call validation with correct values', () => {
    makeSut()

    populateFields()

    expect(validator.validate).toHaveBeenCalledWith('name', { name })
    expect(validator.validate).toHaveBeenCalledWith('email', { email })
    expect(validator.validate).toHaveBeenCalledWith('password', { password })
    expect(validator.validate).toHaveBeenCalledWith('passwordConfirmation', { password, passwordConfirmation })
  })

  it('should disable button if form if Validation fails', () => {
    makeSut()
    validator.validate.mockReturnValueOnce(error).mockReturnValueOnce(error).mockReturnValueOnce(error).mockReturnValueOnce(error)

    populateFields()

    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('should call addAccount with correct values', () => {
    makeSut()

    simulateSubmit()

    expect(addAccount).toHaveBeenCalledWith({ name, email, password })
  })

  it('should call AddAccount only once', async () => {
    makeSut()

    simulateSubmit()
    fireEvent.click(screen.getByRole('button'))
    await waitFor(() => screen.getByTestId('form'))

    expect(addAccount).toHaveBeenCalledTimes(1)
  })

  it('should not call AddAccount if form is invalid', () => {
    makeSut()
    validator.validate.mockReturnValueOnce(error)

    populateFields()
    fireEvent.submit(screen.getByTestId('form'))

    expect(addAccount).not.toHaveBeenCalled()
  })
})

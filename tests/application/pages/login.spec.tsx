import { Login } from '@/application/pages'
import { populateField, AccountParams } from '@/tests/mocks'
import { type Validator } from '@/application/validation'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { mock } from 'jest-mock-extended'
import React from 'react'

describe('Login', () => {
  const { email, password, error } = AccountParams
  const validator = mock<Validator>()
  const authentication = jest.fn()

  const makeSut = (): void => {
    render(
      <>
        <Login validation={validator} authentication={authentication}/>
      </>
    )
  }

  const populateFields = (): void => {
    populateField('email', email)
    populateField('password', password)
  }

  const simulateSubmit = (): void => {
    populateFields()
    fireEvent.click(screen.getByRole('button'))
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

  it('should call authentication with correct values', () => {
    makeSut()

    simulateSubmit()

    expect(authentication).toHaveBeenCalledWith({ email, password })
  })

  it('should call authentication only once', async () => {
    makeSut()

    simulateSubmit()
    fireEvent.click(screen.getByRole('button'))
    await waitFor(() => screen.getByTestId('form'))

    expect(authentication).toHaveBeenCalledTimes(1)
  })
})

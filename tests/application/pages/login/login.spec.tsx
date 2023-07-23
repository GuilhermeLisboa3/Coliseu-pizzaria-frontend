import { Login } from '@/application/pages'
import { populateField, AccountParams } from '@/tests/mocks'
import { type Validator } from '@/application/validation'
import { InvalidCredentialsError } from '@/domain/errors'
import { AccountContext } from '@/application/contexts'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { mock } from 'jest-mock-extended'
import { ToastContainer } from 'react-toastify'
import React from 'react'

jest.mock('next/navigation')

describe('Login', () => {
  const { email, password, error, accessToken, name } = AccountParams
  const validator = mock<Validator>()
  const useRouter = jest.spyOn(require('next/navigation'), 'useRouter')
  const router = { push: jest.fn() }
  const authentication = jest.fn()
  const setCurrentAccountMock = jest.fn()

  const makeSut = (): void => {
    render(
      <AccountContext.Provider value={{ setCurrentAccount: setCurrentAccountMock, getCurrentAccount: jest.fn() }}>
        <ToastContainer/>
        <Login validation={validator} authentication={authentication}/>
      </AccountContext.Provider>
    )
  }

  beforeAll(() => {
    useRouter.mockReturnValue(router)
    authentication.mockResolvedValue({ name, accessToken })
  })

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

  it('should not call authentication if form is invalid', () => {
    makeSut()
    validator.validate.mockReturnValueOnce(error)

    populateFields()
    fireEvent.submit(screen.getByTestId('form'))

    expect(authentication).not.toHaveBeenCalled()
  })

  it('should show alert error if authentication fails', async () => {
    makeSut()
    authentication.mockRejectedValueOnce(new InvalidCredentialsError())

    simulateSubmit()

    expect(await screen.findByText(new InvalidCredentialsError().message)).toBeInTheDocument()
  })

  it('should show spinner if click button', async () => {
    makeSut()

    simulateSubmit()

    expect(await screen.findByTestId('spinner')).toBeInTheDocument()
  })

  it('should save account data on localstorage and go to home page', async () => {
    makeSut()

    simulateSubmit()
    await waitFor(() => screen.getByTestId('form'))

    expect(setCurrentAccountMock).toHaveBeenCalledWith({ name, accessToken })
    expect(router.push).toHaveBeenCalledWith('/')
  })
})

import { populateField, addressParams } from '@/tests/mocks'
import { AddAddress } from '@/application/pages'
import { AccountContext } from '@/application/contexts'
import { type Validator } from '@/application/validation'
import { FieldNotFoundError } from '@/domain/errors'

import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { mock } from 'jest-mock-extended'
import { ToastContainer } from 'react-toastify'

describe('AddAddress', () => {
  const { zipCode, error } = addressParams
  const searchAddress = jest.fn()
  const validator = mock<Validator>()

  const makeSut = (): void => {
    render(
      <AccountContext.Provider value={{ setCurrentAccount: jest.fn(), getCurrentAccount: jest.fn() }}>
        <ToastContainer/>
        <AddAddress validation={validator} searchAddress={searchAddress}/>
      </AccountContext.Provider>
    )
  }
  const populateSearchFormFields = (): void => {
    populateField('cep', zipCode)
  }

  const simulateSearchFormSubmit = (): void => {
    populateSearchFormFields()
    fireEvent.click(screen.getByRole('button', { name: 'Buscar' }))
  }

  it('should load with correct initial state', async () => {
    validator.validate.mockReturnValueOnce(error)

    makeSut()

    expect(screen.getByTestId('cep')).toBeInTheDocument()
    expect(screen.queryByTestId('surname')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Buscar' })).toBeDisabled()
  })

  it('should call validation with correct values', () => {
    makeSut()

    populateSearchFormFields()

    expect(validator.validate).toHaveBeenCalledWith('zipCode', { zipCode })
  })

  it('should disable button if form if Validation fails', () => {
    makeSut()
    validator.validate.mockReturnValueOnce(error)

    populateSearchFormFields()

    expect(screen.getByRole('button', { name: 'Buscar' })).toBeDisabled()
  })

  it('should call searchAddress with correct values', () => {
    makeSut()

    simulateSearchFormSubmit()

    expect(searchAddress).toHaveBeenCalledWith({ zipCode })
  })

  it('should show spinner if click button', async () => {
    makeSut()

    simulateSearchFormSubmit()

    expect(await screen.findByTestId('spinner')).toBeInTheDocument()
  })

  it('should not call searchAddress if validation fails', () => {
    makeSut()
    validator.validate.mockReturnValueOnce(error)

    populateSearchFormFields()
    fireEvent.submit(screen.getByTestId('search-form'))

    expect(searchAddress).not.toHaveBeenCalled()
  })

  it('should show error if searchAddress return error', async () => {
    makeSut()
    searchAddress.mockRejectedValueOnce(new FieldNotFoundError('cep'))

    simulateSearchFormSubmit()

    expect(await screen.findByText(new FieldNotFoundError('cep').message)).toBeInTheDocument()
  })
})

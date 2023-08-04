import { populateField, addressParams } from '@/tests/mocks'
import { AddAddress } from '@/application/pages'
import { AccountContext, CartProvider } from '@/application/contexts'
import { type Validator } from '@/application/validation'
import { FieldNotFoundError, UnexpectedError } from '@/domain/errors'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { mock } from 'jest-mock-extended'
import { ToastContainer } from 'react-toastify'

jest.mock('next/navigation')

describe('AddAddress', () => {
  const { zipCode, neighborhood, street, error, complement, number, surname } = addressParams
  const useRouter = jest.spyOn(require('next/navigation'), 'useRouter')
  const router = { push: jest.fn() }
  const searchAddress = jest.fn()
  const getCart = jest.fn()
  const addAddress = jest.fn()
  const validator = mock<Validator>()

  beforeAll(() => {
    validator.validate.mockReturnValue('')
    getCart.mockResolvedValue({ products: [] })
    useRouter.mockReturnValue(router)
    searchAddress.mockResolvedValue({ neighborhood, street })
  })

  const makeSut = (): void => {
    render(
      <AccountContext.Provider value={{ setCurrentAccount: jest.fn(), getCurrentAccount: jest.fn() }}>
        <CartProvider getCart={getCart}>
          <ToastContainer/>
          <AddAddress validation={validator} searchAddress={searchAddress} addAddress={addAddress}/>
        </CartProvider>
      </AccountContext.Provider>
    )
  }

  const populateSearchFormFields = (): void => {
    populateField('cep', zipCode)
  }

  const populateAddFormFields = async (): Promise<void> => {
    simulateSearchFormSubmit()
    await waitFor(() => screen.getByTestId('add-form'))
    populateField('number', number.toString())
    populateField('complement', complement)
    populateField('surname', surname)
  }

  const simulateSearchFormSubmit = (): void => {
    populateSearchFormFields()
    fireEvent.click(screen.getByRole('button', { name: 'Buscar' }))
  }

  const simulateAddFormSubmit = async (): Promise<void> => {
    await populateAddFormFields()
    fireEvent.click(screen.getByRole('button', { name: 'Salvar' }))
  }

  it('should load with correct initial state', async () => {
    validator.validate.mockReturnValueOnce(error)

    makeSut()

    expect(screen.getByTestId('cep')).toBeInTheDocument()
    expect(screen.queryByTestId('surname')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Buscar' })).toBeDisabled()
    await waitFor(() => screen.getByTestId('cep'))
  })

  it('should call validation with correct values', async () => {
    makeSut()

    populateSearchFormFields()

    expect(validator.validate).toHaveBeenCalledWith('zipCode', { zipCode })
    await waitFor(() => screen.getByTestId('cep'))
  })

  it('should disable button if form if Validation fails', async () => {
    makeSut()
    validator.validate.mockReturnValueOnce(error)

    populateSearchFormFields()

    expect(screen.getByRole('button', { name: 'Buscar' })).toBeDisabled()
    await waitFor(() => screen.getByTestId('cep'))
  })

  it('should call searchAddress with correct values', async () => {
    makeSut()

    simulateSearchFormSubmit()
    await waitFor(() => screen.getByTestId('search-form'))

    expect(searchAddress).toHaveBeenCalledWith({ zipCode })
  })

  it('should show spinner if click button', async () => {
    makeSut()

    simulateSearchFormSubmit()

    expect(screen.getByTestId('spinner')).toBeInTheDocument()
    await waitFor(() => screen.getByTestId('add-form'))
  })

  it('should not call searchAddress if validation fails', async () => {
    makeSut()
    validator.validate.mockReturnValueOnce(error)

    await waitFor(() => screen.getByTestId('cep'))
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

  it('should show form-add if SearchAddress succeeds', async () => {
    makeSut()

    simulateSearchFormSubmit()
    await waitFor(() => screen.getByTestId('add-form'))

    expect(screen.getByTestId('add-form')).toBeInTheDocument()
    expect(screen.queryByTestId('form-search')).not.toBeInTheDocument()
    expect(screen.getByTestId('neighborhood')).toHaveProperty('value', neighborhood)
    expect(screen.getByTestId('street')).toHaveProperty('value', street)
    expect(screen.getByTestId('cep')).toHaveProperty('value', zipCode)
  })

  it('should enable submit button if form-add is valid', async () => {
    makeSut()

    await populateAddFormFields()

    expect(screen.getByRole('button', { name: 'Salvar' })).toBeEnabled()
  })

  it('should call AddAddress with correct values', async () => {
    makeSut()

    await simulateAddFormSubmit()
    await waitFor(() => screen.getByTestId('add-form'))

    expect(addAddress).toHaveBeenCalledWith({ zipCode, neighborhood, street, surname, number, complement })
  })

  it('should not call AddAddress if validation fails', async () => {
    makeSut()
    validator.validate.mockReturnValueOnce('').mockReturnValueOnce(error)

    await populateAddFormFields()
    fireEvent.submit(screen.getByTestId('add-form'))

    expect(addAddress).not.toHaveBeenCalled()
  })

  it('should show spinner if click button', async () => {
    makeSut()
    await simulateAddFormSubmit()
    fireEvent.submit(screen.getByTestId('add-form'))

    expect(await screen.findByTestId('spinner')).toBeInTheDocument()
    await waitFor(() => screen.getByTestId('add-form'))
  })

  it('should show alert error if AddAddress fails', async () => {
    makeSut()
    addAddress.mockRejectedValueOnce(new UnexpectedError())

    await simulateAddFormSubmit()

    expect(await screen.findByText(new UnexpectedError().message)).toBeInTheDocument()
  })

  it('should call push navigation if addAddress succeeds', async () => {
    makeSut()

    await simulateAddFormSubmit()
    fireEvent.submit(screen.getByTestId('add-form'))

    expect(router.push).toHaveBeenCalledWith('/profile')
  })
})

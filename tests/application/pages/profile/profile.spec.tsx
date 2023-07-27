import { addressParams, AccountParams, populateField } from '@/tests/mocks'
import { Profile } from '@/application/pages'
import { AccountContext } from '@/application/contexts'
import { UnauthorizedError, UnexpectedError } from '@/domain/errors'
import { type Validator } from '@/application/validation'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { ToastContainer } from 'react-toastify'
import React from 'react'
import { mock } from 'jest-mock-extended'

jest.mock('next/navigation', () => ({
  useRouter () {
    return ({ push: jest.fn() })
  },
  usePathname () {}
}))

describe('Profile', () => {
  const listAddresses = jest.fn()
  const deleteAddress = jest.fn()
  const updateAddress = jest.fn()
  const getSpy = jest.fn()
  const setSpy = jest.fn()
  const useRouter = jest.spyOn(require('next/navigation'), 'useRouter')
  const router = { push: jest.fn() }
  const { surname, complement, neighborhood, street, zipCode, number, id } = addressParams
  const { name, accessToken } = AccountParams
  const validator = mock<Validator>()

  const makeSut = (): void => {
    render(
      <AccountContext.Provider value={{ setCurrentAccount: setSpy, getCurrentAccount: getSpy }}>
        <ToastContainer/>
        <Profile listAddresses={listAddresses} deleteAddress={deleteAddress} validation={validator} updateAddress={updateAddress}/>
      </AccountContext.Provider>
    )
  }

  beforeAll(() => {
    useRouter.mockReturnValue(router)
    listAddresses.mockResolvedValue([{ surname, complement, neighborhood, street, zipCode, number, id, active: true }])
    getSpy.mockReturnValue({ name, accessToken })
  })

  describe('list', () => {
    it('should load with correct initial state', async () => {
      makeSut()

      expect(screen.getByTestId('skeletonAddress')).toBeInTheDocument()
      await waitFor(() => screen.getByRole('main'))
    })

    it('should call listAddresses', async () => {
      makeSut()

      await waitFor(() => screen.getByRole('main'))
      expect(listAddresses).toHaveBeenCalled()
    })

    it('should render user name and addresses on success', async () => {
      makeSut()

      await waitFor(() => screen.getByRole('main'))
      expect(await screen.findByText(surname)).toBeInTheDocument()
      expect(await screen.findByText(`${street}, ${number}, ${complement}`)).toBeInTheDocument()
      expect(await screen.findByText(`${neighborhood}, ${zipCode}`)).toBeInTheDocument()
      expect(await screen.findByText(`Olá, ${name}`)).toBeInTheDocument()
    })

    it('should render error on UnexpectedError', async () => {
      listAddresses.mockRejectedValueOnce(new UnexpectedError())

      makeSut()
      await waitFor(() => screen.getByRole('button', { name: /Tentar novamente/i }))

      expect(screen.getByText(new UnexpectedError().message)).toBeInTheDocument()
    })

    it('should call listAddresses on reload', async () => {
      listAddresses.mockRejectedValueOnce(new UnexpectedError())

      makeSut()
      await waitFor(() => screen.getByRole('button', { name: /Tentar novamente/i }))
      fireEvent.click(screen.getByRole('button', { name: /Tentar novamente/i }))

      expect(listAddresses).toHaveBeenCalledTimes(2)
      await waitFor(() => screen.getByRole('main'))
    })
  })

  describe('delete', () => {
    it('should call deleteAddress with correct value', async () => {
      makeSut()

      await waitFor(() => screen.getByTestId('address'))
      fireEvent.click(screen.getByTestId('icon-delete'))

      expect(deleteAddress).toHaveBeenCalledWith({ id })
      await waitFor(() => screen.getByTestId('address'))
    })

    it('should call deleteAddress only once', async () => {
      makeSut()

      await waitFor(() => screen.getByTestId('address'))
      fireEvent.click(screen.getByTestId('icon-delete'))
      fireEvent.click(screen.getByTestId('icon-delete'))

      expect(deleteAddress).toHaveBeenCalledTimes(1)
      expect(deleteAddress).toHaveBeenCalledWith({ id })
      await waitFor(() => screen.getByTestId('address'))
    })

    it('should show alert error if deleteAddress fails', async () => {
      makeSut()
      deleteAddress.mockRejectedValueOnce(new UnexpectedError())

      await waitFor(() => screen.getByTestId('address'))
      fireEvent.click(screen.getByTestId('icon-delete'))

      expect(await screen.findByText(new UnexpectedError().message)).toBeInTheDocument()
      await waitFor(() => screen.getByTestId('address'))
    })

    it('should logout if deleteAddress return UnauthorizedError', async () => {
      makeSut()
      deleteAddress.mockRejectedValueOnce(new UnauthorizedError())

      await waitFor(() => screen.getByTestId('address'))
      fireEvent.click(screen.getByTestId('icon-delete'))
      await waitFor(async () => await screen.findByText(new UnauthorizedError().message))

      expect(setSpy).toHaveBeenCalledWith(undefined)
      expect(router.push).toHaveBeenCalledWith('/login')
    })

    it('should remove address on success', async () => {
      makeSut()

      await waitFor(() => screen.getByTestId('address'))
      fireEvent.click(screen.getByTestId('icon-delete'))
      await waitFor(() => screen.getByTestId('address'))

      expect(screen.queryByTestId('address')).not.toBeInTheDocument()
    })
  })

  describe('edit', () => {
    const openEditModal = async (): Promise<void> => {
      await waitFor(() => screen.getByTestId('address'))
      fireEvent.click(screen.getByTestId('icon-edit'))
    }

    const populateFields = (): void => {
      populateField('surname', surname)
      populateField('complement', complement)
      populateField('number', number.toString())
    }

    const simulateSubmit = (): void => {
      populateFields()
      fireEvent.click(screen.getByRole('button', { name: /Salvar/i }))
    }

    it('should open edit address modal when edit button is clicked', async () => {
      makeSut()

      await openEditModal()

      expect(screen.getByTestId('edit-form')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /Salvar/i })).toBeInTheDocument()
    })

    it('should remove edit address modal if click button close', async () => {
      makeSut()

      await openEditModal()
      fireEvent.click(screen.getByTestId('close-modal'))

      expect(screen.queryByTestId('edit-form')).not.toBeInTheDocument()
      expect(screen.queryByRole('button', { name: /Salvar/i })).not.toBeInTheDocument()
    })

    it('should call validation with correct values', async () => {
      makeSut()

      await openEditModal()
      populateFields()

      expect(validator.validate).toHaveBeenCalledWith('number', { number })
      expect(validator.validate).toHaveBeenCalledWith('surname', { surname })
    })

    it('should enable submit button if form is valid', async () => {
      makeSut()

      await openEditModal()
      populateFields()

      expect(screen.getByRole('button', { name: /Salvar/i })).toBeEnabled()
    })

    it('should show spinner on submit', async () => {
      makeSut()

      await openEditModal()
      simulateSubmit()
      await waitFor(() => screen.getByTestId('edit-form'))

      expect(await screen.findByTestId('spinner')).toBeInTheDocument()
    })

    it('should call UpdateAddress with correct values', async () => {
      makeSut()

      await openEditModal()
      simulateSubmit()
      await waitFor(() => screen.getByTestId('edit-form'))

      expect(updateAddress).toHaveBeenCalledWith({ id, surname, number, complement })
    })
  })
})

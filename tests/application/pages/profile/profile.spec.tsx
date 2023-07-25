import { addressParams, AccountParams } from '@/tests/mocks'
import { Profile } from '@/application/pages'
import { AccountContext } from '@/application/contexts'
import { AddressContext } from '@/application/pages/profile/contexts'
import { UnexpectedError } from '@/domain/errors'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'

jest.mock('next/navigation', () => ({
  useRouter () {
    return ({ push: jest.fn() })
  },
  usePathname () {}
}))

describe('Profile', () => {
  const listAddresses = jest.fn()
  const deleteAddress = jest.fn()
  const getSpy = jest.fn()
  const { surname, complement, neighborhood, street, zipCode, number, id } = addressParams
  const { name, accessToken } = AccountParams

  const makeSut = (): void => {
    render(
      <AccountContext.Provider value={{ setCurrentAccount: jest.fn(), getCurrentAccount: getSpy }}>
        <AddressContext.Provider value={{ handleDelete: jest.fn() }}>
          <Profile listAddresses={listAddresses} deleteAddress={deleteAddress}/>
        </AddressContext.Provider>
      </AccountContext.Provider>
    )
  }

  beforeAll(() => {
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
    })

    it('should call deleteAddress only once', async () => {
      makeSut()

      await waitFor(() => screen.getByTestId('address'))
      fireEvent.click(screen.getByTestId('icon-delete'))
      fireEvent.click(screen.getByTestId('icon-delete'))

      expect(deleteAddress).toHaveBeenCalledTimes(1)
      expect(deleteAddress).toHaveBeenCalledWith({ id })
    })
  })
})

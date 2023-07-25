import { addressParams, AccountParams } from '@/tests/mocks'
import { Profile } from '@/application/pages'
import { AccountContext } from '@/application/contexts'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { UnexpectedError } from '@/domain/errors'

jest.mock('next/navigation', () => ({
  useRouter () {
    return ({ push: jest.fn() })
  },
  usePathname () {}
}))

describe('Profile', () => {
  const listAddresses = jest.fn()
  const getSpy = jest.fn()
  const { surname, complement, neighborhood, street, zipCode, number, id } = addressParams
  const { name, accessToken } = AccountParams

  const makeSut = (): void => {
    render(
      <AccountContext.Provider value={{ setCurrentAccount: jest.fn(), getCurrentAccount: getSpy }}>
        <Profile listAddresses={listAddresses} />
      </AccountContext.Provider>
    )
  }

  beforeAll(() => {
    listAddresses.mockResolvedValue([{ surname, complement, neighborhood, street, zipCode, number, id, active: true }])
    getSpy.mockReturnValue({ name, accessToken })
  })

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

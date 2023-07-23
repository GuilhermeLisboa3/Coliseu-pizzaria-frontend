import { Profile } from '@/application/pages'
import { AccountContext } from '@/application/contexts'

import { render, screen } from '@testing-library/react'
import React from 'react'

describe('Profile', () => {
  const listAddresses = jest.fn()

  const makeSut = (): void => {
    render(
      <AccountContext.Provider value={{ setCurrentAccount: jest.fn(), getCurrentAccount: jest.fn() }}>
        <Profile listAddresses={listAddresses} />
      </AccountContext.Provider>
    )
  }

  it('should load with correct initial state', async () => {
    makeSut()

    expect(screen.getByTestId('skeletonAddress')).toBeInTheDocument()
  })

  it('should call listAddresses', async () => {
    makeSut()

    expect(listAddresses).toHaveBeenCalled()
  })
})

import { AddAddress } from '@/application/pages'
import { AccountContext } from '@/application/contexts'

import { render, screen } from '@testing-library/react'
import React from 'react'

describe('AddAddress', () => {
  const makeSut = (): void => {
    render(
      <AccountContext.Provider value={{ setCurrentAccount: jest.fn(), getCurrentAccount: jest.fn() }}>
        <AddAddress />
      </AccountContext.Provider>
    )
  }

  it('should load with correct initial state', async () => {
    makeSut()

    expect(screen.getByTestId('cep')).toBeInTheDocument()
    expect(screen.queryByTestId('surname')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Buscar' })).toBeDisabled()
  })
})

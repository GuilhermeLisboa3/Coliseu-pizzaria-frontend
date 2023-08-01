import { Menu } from '@/application/pages'
import { AccountContext } from '@/application/contexts'

import { render, screen } from '@testing-library/react'
import React from 'react'

describe('Menu', () => {
  const makeSut = (): void => {
    render(
      <AccountContext.Provider value={{ setCurrentAccount: jest.fn(), getCurrentAccount: jest.fn() }}>
        <Menu />
      </AccountContext.Provider>
    )
  }

  it('should load with correct initial state', async () => {
    makeSut()

    expect(screen.getAllByTestId('skeleton')).toHaveLength(2)
  })
})

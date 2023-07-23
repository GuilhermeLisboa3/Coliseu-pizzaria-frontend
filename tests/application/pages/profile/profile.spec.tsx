import { Profile } from '@/application/pages'
import { AccountContext } from '@/application/contexts'

import { render, screen } from '@testing-library/react'
import React from 'react'

describe('Profile', () => {
  const makeSut = (): void => {
    render(
      <AccountContext.Provider value={{ setCurrentAccount: jest.fn(), getCurrentAccount: jest.fn() }}>
        <Profile />
      </AccountContext.Provider>
    )
  }

  it('should load with correct initial state', async () => {
    makeSut()

    expect(screen.getByTestId('skeletonAddress')).toBeInTheDocument()
  })
})

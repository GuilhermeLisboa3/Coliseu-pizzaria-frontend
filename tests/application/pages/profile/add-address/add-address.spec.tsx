import { populateField, addressParams } from '@/tests/mocks'
import { AddAddress } from '@/application/pages'
import { AccountContext } from '@/application/contexts'
import { type Validator } from '@/application/validation'

import { render, screen } from '@testing-library/react'
import React from 'react'
import { mock } from 'jest-mock-extended'

describe('AddAddress', () => {
  const { zipCode } = addressParams
  const validator = mock<Validator>()

  const makeSut = (): void => {
    render(
      <AccountContext.Provider value={{ setCurrentAccount: jest.fn(), getCurrentAccount: jest.fn() }}>
        <AddAddress validation={validator} />
      </AccountContext.Provider>
    )
  }
  const populateFields = (): void => {
    populateField('cep', zipCode)
  }

  it('should load with correct initial state', async () => {
    makeSut()

    expect(screen.getByTestId('cep')).toBeInTheDocument()
    expect(screen.queryByTestId('surname')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Buscar' })).toBeDisabled()
  })

  it('should call validation with correct values', () => {
    makeSut()

    populateFields()

    expect(validator.validate).toHaveBeenCalledWith('zipCode', { zipCode })
  })
})

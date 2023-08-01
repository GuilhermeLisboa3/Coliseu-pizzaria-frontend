import { productParams } from '@/tests/mocks'
import { Menu } from '@/application/pages'
import { AccountContext } from '@/application/contexts'

import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'

describe('Menu', () => {
  const { available, description, categoryId, id, name, picture, price } = productParams
  const listCategoryWithProducts = jest.fn()

  const makeSut = (): void => {
    render(
      <AccountContext.Provider value={{ setCurrentAccount: jest.fn(), getCurrentAccount: jest.fn() }}>
        <Menu listCategoryWithProducts={listCategoryWithProducts}/>
      </AccountContext.Provider>
    )
  }

  beforeAll(() => {
    listCategoryWithProducts.mockResolvedValue([{ id: '1', name: 'any_title', products: [{ available, description, id, name, picture, price, categoryId }] }])
  })

  it('should load with correct initial state', async () => {
    makeSut()

    expect(screen.getAllByTestId('skeleton')).toHaveLength(2)
    await waitFor(() => screen.getByTestId('title-menu'))
  })

  it('should call listCategoryWithProducts', async () => {
    makeSut()

    await waitFor(() => screen.getByRole('list'))

    expect(listCategoryWithProducts).toHaveBeenCalled()
    expect(listCategoryWithProducts).toHaveBeenCalledTimes(1)
  })

  it('should render products', async () => {
    makeSut()

    await waitFor(() => screen.getByRole('list'))

    expect(screen.getByText(name)).toBeInTheDocument()
  })
})

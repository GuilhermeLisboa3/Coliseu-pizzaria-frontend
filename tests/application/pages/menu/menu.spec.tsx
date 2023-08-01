import { productParams } from '@/tests/mocks'
import { Menu } from '@/application/pages'
import { AccountContext } from '@/application/contexts'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { UnauthorizedError, UnexpectedError } from '@/domain/errors'

jest.mock('next/navigation', () => ({
  useRouter () {
    return ({ push: jest.fn() })
  },
  usePathname () {}
}))

describe('Menu', () => {
  const { available, description, categoryId, id, name, picture, price } = productParams
  const listCategoryWithProducts = jest.fn()
  const setSpy = jest.fn()
  const useRouter = jest.spyOn(require('next/navigation'), 'useRouter')
  const router = { push: jest.fn() }

  const makeSut = (): void => {
    render(
      <AccountContext.Provider value={{ setCurrentAccount: setSpy, getCurrentAccount: jest.fn() }}>
        <Menu listCategoryWithProducts={listCategoryWithProducts}/>
      </AccountContext.Provider>
    )
  }

  beforeAll(() => {
    useRouter.mockReturnValue(router)
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

  it('should render error on UnexpectedError', async () => {
    listCategoryWithProducts.mockRejectedValueOnce(new UnexpectedError())

    makeSut()
    await waitFor(() => screen.getByRole('button', { name: /Tentar novamente/i }))

    expect(screen.queryByRole('list')).not.toBeInTheDocument()
    expect(screen.getByText(new UnexpectedError().message)).toBeInTheDocument()
  })

  it('should call listCategoryWithProducts on reload', async () => {
    listCategoryWithProducts.mockRejectedValueOnce(new UnexpectedError())

    makeSut()
    await waitFor(() => screen.getByRole('button', { name: /Tentar novamente/i }))
    fireEvent.click(screen.getByRole('button', { name: /Tentar novamente/i }))

    expect(listCategoryWithProducts).toHaveBeenCalledTimes(2)
    await waitFor(() => screen.getByTestId('title-menu'))
  })

  it('should logout if listCategories return UnauthorizedError', async () => {
    listCategoryWithProducts.mockRejectedValueOnce(new UnauthorizedError())
    makeSut()

    await waitFor(() => screen.getByTestId('title-menu'))

    expect(setSpy).toHaveBeenCalledWith(undefined)
    expect(router.push).toHaveBeenCalledWith('/login')
  })
})

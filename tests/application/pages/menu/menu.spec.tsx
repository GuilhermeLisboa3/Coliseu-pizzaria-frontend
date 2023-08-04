import { productParams } from '@/tests/mocks'
import { Menu } from '@/application/pages'
import { AccountContext, CartProvider } from '@/application/contexts'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { UnauthorizedError, UnexpectedError } from '@/domain/errors'
import { ToastContainer } from 'react-toastify'

jest.mock('next/navigation', () => ({
  useRouter () {
    return ({ push: jest.fn() })
  },
  usePathname () {}
}))

describe('Menu', () => {
  const { available, description, categoryId, id, name, picture, price } = productParams
  const listCategoryWithProducts = jest.fn()
  const getCart = jest.fn()
  const addCartItem = jest.fn()
  const deleteCartItem = jest.fn()
  const setSpy = jest.fn()
  const useRouter = jest.spyOn(require('next/navigation'), 'useRouter')
  const router = { push: jest.fn() }

  const makeSut = (): void => {
    render(
      <AccountContext.Provider value={{ setCurrentAccount: setSpy, getCurrentAccount: jest.fn() }}>
        <CartProvider getCart={getCart} addCartItem={addCartItem} deleteCartItem={deleteCartItem}>
          <ToastContainer/>
          <Menu listCategoryWithProducts={listCategoryWithProducts}/>
        </CartProvider>
      </AccountContext.Provider>
    )
  }

  beforeAll(() => {
    useRouter.mockReturnValue(router)
    getCart.mockResolvedValue({ products: [] })
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
    expect(await screen.findByText(description)).toBeInTheDocument()
  })

  it('should render products with describe smaller', async () => {
    const describe2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio error est repellat quas quia molestias2'
    listCategoryWithProducts.mockResolvedValue([{ id: '1', name: 'any_title', products: [{ available, description: describe2, id, name, picture, price, categoryId }] }])
    makeSut()

    await waitFor(() => screen.getByRole('list'))

    expect(screen.getByText(name)).toBeInTheDocument()
    expect(await screen.findByText(`${describe2.substring(0, 100)}...`)).toBeInTheDocument()
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

  describe('cart', () => {
    beforeAll(() => {
      getCart.mockResolvedValue({ products: [{ available, description, categoryId, id, name: 'any_name', picture, price, categoryName: name, quantity: 1 }] })
    })

    it('should call getCart when the screen is rendered', async () => {
      getCart.mockResolvedValueOnce({ products: [] })
      makeSut()

      expect(screen.getByTestId('skeleton-cart-item')).toBeInTheDocument()
      expect(getCart).toHaveBeenCalled()
      expect(getCart).toHaveBeenCalledTimes(1)
      await waitFor(() => screen.getByTestId('title-menu'))
      expect(screen.queryByTestId('cart-item-length')).not.toBeInTheDocument()
    })

    it('should show the products when you click on the cart', async () => {
      makeSut()

      await waitFor(() => screen.getByTestId('title-menu'))
      fireEvent.click(screen.getByTestId('cart'))
      expect(screen.getByText('any_name')).toBeInTheDocument()
    })

    it('should show toast if getCart return error', async () => {
      getCart.mockRejectedValueOnce(new UnexpectedError())
      makeSut()

      await waitFor(() => screen.getByTestId('title-menu'))
      expect(await screen.findByText(new UnexpectedError().message)).toBeInTheDocument()
    })

    it('should call addCartItem when click product-add-cart', async () => {
      getCart.mockResolvedValueOnce({ products: [] })
      makeSut()

      await waitFor(() => screen.getByTestId('title-menu'))
      fireEvent.click(screen.getByTestId('product-add-cart'))
      expect(addCartItem).toHaveBeenCalledWith({ id })
      expect(addCartItem).toHaveBeenCalledTimes(1)
      await waitFor(() => screen.getAllByText('R$ 5,00'))
    })

    it('should call addCartItem when click add-cart', async () => {
      makeSut()

      await waitFor(() => screen.getByTestId('title-menu'))
      fireEvent.click(screen.getByTestId('add-cart'))
      expect(addCartItem).toHaveBeenCalledWith({ id })
      expect(addCartItem).toHaveBeenCalledTimes(1)
      await waitFor(() => screen.getByText('any_name'))
    })

    it('should not add duplicated product on cart', async () => {
      makeSut()

      await waitFor(() => screen.getByTestId('title-menu'))
      fireEvent.click(screen.getByTestId('product-add-cart'))
      fireEvent.click(screen.getByTestId('product-add-cart'))
      fireEvent.click(screen.getByTestId('cart'))

      expect(screen.getByTestId('itens').children).toHaveLength(1)
      await waitFor(() => screen.getByText('any_name'))
    })

    it('should call deleteCartItem when click delete-cart', async () => {
      makeSut()

      await waitFor(() => screen.getByTestId('title-menu'))
      fireEvent.click(screen.getByTestId('delete-cart'))
      expect(deleteCartItem).toHaveBeenCalledWith({ id })
      expect(deleteCartItem).toHaveBeenCalledTimes(1)
      await waitFor(() => screen.getByText('R$ 5,00'))
    })

    it('should remove product on cart when quantity is equal an one', async () => {
      getCart.mockResolvedValueOnce({ products: [{ available, description, categoryId, id, name: 'any_name', picture, price, categoryName: name, quantity: 1 }] })
      makeSut()

      await waitFor(() => screen.getByTestId('title-menu'))
      fireEvent.click(screen.getByTestId('delete-cart'))
      await waitFor(() => screen.getAllByText('R$ 5,00'))

      expect(screen.getByTestId('itens').children).toHaveLength(0)
      await waitFor(() => screen.getAllByText('R$ 5,00'))
    })

    it('should close cart', async () => {
      makeSut()

      await waitFor(() => screen.getByRole('list'))
      fireEvent.click(screen.getByTestId('cart'))
      fireEvent.click(screen.getByTestId('close-cart'))
    })
  })
})

import { mockOk, mockServerError } from '../mocks/http-mocks'

describe('menu', () => {
  const mockSuccess = (): void => mockOk('GET', /categories/, 'products')
  const mockError = (method: any): void => method('GET', /categories/)
  const mockSuccessCart = (): void => mockOk('GET', /cart/, 'cart')
  const mockSuccessCartItem = (): void => mockOk('POST', /cart-item/)

  beforeEach(() => {
    cy.fixture('account').then(account => cy.setLocalStorageItem('account', account))
  })

  it('should present error on UnexpectedError', () => {
    mockError(mockServerError)
    mockSuccessCart()

    cy.visit('menu')

    cy.contains('Algo deu errado. Tente novamente!')
    cy.get('button').contains('Tentar novamente')
  })

  it('should reload on button click', () => {
    mockSuccessCart()
    mockError(mockServerError)

    cy.visit('menu')
    cy.contains('Tentar novamente').click()

    cy.get('ul').should('have.length', 2)
  })

  it('should present categories list', () => {
    mockSuccessCart()
    mockSuccess()

    cy.visit('menu')

    cy.get('ul').should('have.length', 2)
    cy.get('ul').should('have.length', 1)
    cy.get('li:not(:empty)').should('have.length', 1)
  })

  describe('cart', () => {
    it('should close cart', () => {
      mockSuccessCart()
      mockSuccess()

      cy.visit('menu')

      cy.getByTestId('cart').click()
      cy.getByTestId('close-cart').click()
    })

    it('should add product on cart', () => {
      mockSuccessCart()
      mockSuccessCartItem()
      mockSuccess()

      cy.visit('menu')

      cy.getByTestId('product-add-cart').click()
      cy.getByTestId('cart').click()

      cy.contains('R$ 30,00')
      cy.contains('R$ 10,00')
    })
  })
})

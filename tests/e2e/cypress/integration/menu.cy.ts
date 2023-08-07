import { mockOk, mockServerError } from '../mocks/http-mocks'

describe('mmanu', () => {
  const mockError = (method: any): void => method('GET', /categories/)
  const mockSuccessCart = (): void => mockOk('POST', /cart/, 'cart')

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
})

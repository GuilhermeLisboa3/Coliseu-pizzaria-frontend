import { mockOk, mockServerError } from '../mocks/http-mocks'

import faker from 'faker'

describe('Profile', () => {
  const mockError = (method: any): void => method('GET', /addresses/)
  const mockSuccessCart = (): void => mockOk('GET', /cart/, 'cart')
  const mockSuccess = (): void => mockOk('GET', /addresses/, 'addresses')
  const visit = (): any => cy.visit('profile')

  beforeEach(() => {
    cy.fixture('account').then(account => cy.setLocalStorageItem('account', account))
  })

  it('should present error on UnexpectedError', () => {
    mockSuccessCart()
    mockError(mockServerError)

    visit()

    cy.contains('Algo deu errado. Tente novamente!')
    cy.get('button').contains('Tentar novamente')
  })

  it('should reload on button click', () => {
    mockSuccessCart()
    mockError(mockServerError)

    visit()
    cy.contains('Tentar novamente').click()

    cy.contains('Tentar novamente').should('not.be.exist')
  })

  it('should present addresses list', () => {
    mockSuccessCart()
    mockSuccess()

    visit()

    cy.getByTestId('skeletonAddress').should('have.length', 1)
    cy.getByTestId('address').should('have.length', 1)
  })

  describe('edit', () => {
    const surname = faker.random.word()
    const number = faker.datatype.number()
    const complement = faker.random.words(2)

    const populateFields = (): void => {
      cy.getByTestId('icon-edit').click()
      cy.getInputById('number').focus().clear().type(number.toString())
      cy.getInputById('complement').focus().clear().type(complement)
      cy.getInputById('surname').focus().clear().type(surname)
    }

    const simulateSubmit = (): void => {
      populateFields()
      cy.getSubmitButton().click()
    }

    it('should load edit modal with correct initial state', () => {
      mockSuccessCart()
      mockSuccess()

      visit()

      cy.getByTestId('icon-edit').click()
      cy.get('.react-modal').should('exist')
    })

    it('should keep the button disabled if form is invalid', () => {
      mockSuccessCart()
      mockSuccess()

      visit()
      cy.getByTestId('icon-edit').click()
      cy.getInputById('number').focus().clear()

      cy.getSubmitButton().should('be.disabled')
    })

    it('should present UnexpectedError on 500', () => {
      mockSuccessCart()
      mockSuccess()
      mockServerError('PUT', /address/)

      visit()
      cy.wait('@request')
      simulateSubmit()

      cy.contains('Algo deu errado. Tente novamente!')
    })
  })
})

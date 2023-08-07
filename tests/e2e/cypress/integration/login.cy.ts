import { mockServerError, mockUnauthorizedError, mockOk } from '../mocks/http-mocks'

import faker from 'faker'

describe('login', () => {
  const validEmail: string = faker.internet.email()
  const invalidEmail: string = faker.random.word()
  const password: string = faker.internet.password(8)

  const mockError = (method: any): void => method('POST', /login/)
  const mockSuccess = (): void => mockOk('POST', /login/)

  const populateFields = (email = validEmail): void => {
    cy.getInputById('email').focus().type(email)
    cy.getInputById('password').focus().type(password)
  }

  const simulateSubmit = (): void => {
    populateFields()
    cy.getSubmitButton().click()
  }

  beforeEach(() => {
    cy.visit('login')
  })

  it('should load with correct initial state', () => {
    cy.getSubmitButton().should('be.disabled').should('have.text', 'Entrar')
  })

  it('should keep the button disabled if form is invalid', () => {
    populateFields(invalidEmail)

    cy.getSubmitButton().should('be.disabled')
  })

  it('should enable the button if form is valid', () => {
    populateFields()

    cy.getSubmitButton().should('be.enabled')
  })

  it('should present UnauthorizedError on 401', () => {
    mockError(mockUnauthorizedError)

    simulateSubmit()

    cy.contains('Credenciais inválidas')
    cy.testUrl('/login')
  })

  it('should present UnexpectedError on 500', () => {
    mockError(mockServerError)

    simulateSubmit()

    cy.contains('Algo deu errado. Tente novamente!')
    cy.testUrl('/login')
  })

  it('should not call submit if form is invalid', () => {
    mockSuccess()

    cy.getInputById('email').focus().type(validEmail).type('{enter}')

    cy.get('@request.all').should('have.length', 0)
  })
})

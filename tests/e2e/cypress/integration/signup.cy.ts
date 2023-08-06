import { mockBadRequestError, mockServerError, mockCreated } from '../mocks/http-mocks'

import faker from 'faker'

describe('Signup', () => {
  const validEmail: string = faker.internet.email()
  const invalidEmail: string = faker.random.word()
  const password: string = faker.internet.password(8)
  const invalidPasswordConfirmation: string = faker.internet.password(16)
  const name: string = faker.name.findName()

  const mockError = (method: any): void => method('POST', /signup/)
  const mockSuccess = (): void => mockCreated('POST', /signup/)

  const populateFields = (email = validEmail, passwordConfirmation = password): void => {
    cy.getInputById('name').focus().type(name)
    cy.getInputById('email').focus().type(email)
    cy.getInputById('password').focus().type(password)
    cy.getInputById('passwordConfirmation').focus().type(passwordConfirmation)
  }

  const simulateSubmit = (): void => {
    populateFields()
    cy.getSubmitButton().click()
  }

  beforeEach(() => {
    cy.visit('signup')
  })

  it('should load with correct initial state', () => {
    cy.getSubmitButton().should('be.disabled').should('have.text', 'Cadastre-se')
  })

  it('should keep the button disabled if form is invalid', () => {
    populateFields(invalidEmail, invalidPasswordConfirmation)

    cy.getSubmitButton().should('be.disabled')
  })

  it('should enable the button if form is valid', () => {
    populateFields()

    cy.getSubmitButton().should('be.enabled')
  })

  it('should present FieldInUseError on 400', () => {
    mockError(mockBadRequestError)

    simulateSubmit()

    cy.contains('O email já está em uso!')
    cy.testUrl('/signup')
  })

  it('should present UnexpectedError on 500', () => {
    mockError(mockServerError)

    simulateSubmit()

    cy.contains('Algo deu errado. Tente novamente!')
    cy.testUrl('/signup')
  })

  it('should redirect login on success', () => {
    mockSuccess()

    simulateSubmit()
    cy.wait('@request')

    cy.testUrl('/login')
  })
})

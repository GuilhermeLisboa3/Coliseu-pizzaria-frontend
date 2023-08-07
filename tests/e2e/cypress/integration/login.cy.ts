import faker from 'faker'

describe('login', () => {
  const validEmail: string = faker.internet.email()
  const invalidEmail: string = faker.random.word()
  const password: string = faker.internet.password(8)

  const populateFields = (email = validEmail): void => {
    cy.getInputById('email').focus().type(email)
    cy.getInputById('password').focus().type(password)
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
})

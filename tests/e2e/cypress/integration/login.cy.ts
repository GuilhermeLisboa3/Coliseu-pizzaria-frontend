
describe('login', () => {
  beforeEach(() => {
    cy.visit('login')
  })

  it('should load with correct initial state', () => {
    cy.getSubmitButton().should('be.disabled').should('have.text', 'Entrar')
  })
})

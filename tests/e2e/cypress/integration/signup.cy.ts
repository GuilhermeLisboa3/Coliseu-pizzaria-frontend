describe('Signup', () => {
  beforeEach(() => {
    cy.visit('signup')
  })

  it('should load with correct initial state', () => {
    cy.getSubmitButton().should('be.disabled').should('have.text', 'Cadastre-se')
  })
})

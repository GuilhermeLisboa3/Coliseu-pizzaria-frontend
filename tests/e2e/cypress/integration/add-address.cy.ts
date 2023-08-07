describe('AddAddress', () => {
  beforeEach(() => {
    cy.fixture('account').then(account => cy.setLocalStorageItem('account', account))
  })

  it('should load with correct initial state', () => {
    cy.visit('profile/address')

    cy.getSubmitButton().should('be.disabled').should('have.text', 'Buscar')
  })
})

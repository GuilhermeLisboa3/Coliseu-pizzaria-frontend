Cypress.Commands.add('getByTestId', (id) => cy.get(`[data-testid=${id}]`))
Cypress.Commands.add('getSubmitButton', () => cy.get('button[type=submit]'))

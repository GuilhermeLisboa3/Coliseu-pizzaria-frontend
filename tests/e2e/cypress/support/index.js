Cypress.Commands.add('getInputById', (id) => cy.get(`input[id=${id}]`))
Cypress.Commands.add('getByTestId', (id) => cy.get(`[data-testid=${id}]`))
Cypress.Commands.add('getSubmitButton', () => cy.get('button[type=submit]'))
Cypress.Commands.add('testUrl', (path) => cy.url().should('eq', `${Cypress.config().baseUrl}${path}`))

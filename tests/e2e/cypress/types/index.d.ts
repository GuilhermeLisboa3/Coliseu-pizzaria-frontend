declare namespace Cypress {
  export interface Chainable {
    getByTestId: (id: string) => Chainable<Element>
    getSubmitButton: () => Chainable<Element>
  }
}

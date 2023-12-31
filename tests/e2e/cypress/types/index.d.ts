declare namespace Cypress {
  export interface Chainable {
    getInputById: (id: string) => Chainable<Element>
    getByTestId: (id: string) => Chainable<Element>
    getSubmitButton: () => Chainable<Element>
    testUrl: (path: string) => Chainable<Element>
    testLocalStorageItem: (item: string) => Chainable<Element>
    setLocalStorageItem: (key: string, value: any) => Chainable<Element>
  }
}

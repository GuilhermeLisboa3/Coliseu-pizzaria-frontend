import { mockServerError } from '../mocks/http-mocks'

describe('Profile', () => {
  const mockError = (method: any): void => method('GET', /addresses/)
  const visit = (): any => cy.visit('profile')

  beforeEach(() => {
    cy.fixture('account').then(account => cy.setLocalStorageItem('account', account))
  })

  it('should present error on UnexpectedError', () => {
    mockError(mockServerError)

    visit()

    cy.contains('Algo deu errado. Tente novamente!')
    cy.get('button').contains('Tentar novamente')
  })
})

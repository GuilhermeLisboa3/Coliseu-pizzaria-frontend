import faker from 'faker'
import { mockOk } from '../mocks/http-mocks'

describe('AddAddress', () => {
  const validZipCode = faker.address.zipCode('########')
  const invalidZipCode = faker.address.zipCode('####')

  const mockSuccessCart = (): void => mockOk('GET', /cart/, 'cart')
  const mockSuccessSearchForm = (): void => mockOk('GET', /address/, 'search-address')

  const populateSearchFormFields = (zipCode = validZipCode): void => {
    cy.getInputById('cep').focus().type(zipCode)
  }

  const simulateSearchFormSubmit = (): void => {
    populateSearchFormFields()
    cy.getSubmitButton().click()
  }

  beforeEach(() => {
    cy.fixture('account').then(account => cy.setLocalStorageItem('account', account))
  })

  it('should load with correct initial state', () => {
    mockSuccessCart()

    cy.visit('profile/address')

    cy.getSubmitButton().should('be.disabled').should('have.text', 'Buscar')
  })

  it('should keep the button disabled if form is invalid', () => {
    mockSuccessCart()

    cy.visit('profile/address')

    populateSearchFormFields(invalidZipCode)

    cy.getSubmitButton().should('be.disabled')
  })

  it('should enable the button if form is valid', () => {
    mockSuccessCart()
    cy.visit('profile/address')

    populateSearchFormFields()

    cy.getSubmitButton().should('be.enabled')
  })

  it('should show form add if SearchAddress succeeds', () => {
    cy.visit('profile/address')
    mockSuccessCart()
    mockSuccessSearchForm()

    simulateSearchFormSubmit()
    cy.wait('@request')

    cy.getSubmitButton().should('be.disabled').should('have.text', 'Salvar')
  })
})

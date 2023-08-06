import faker from 'faker'

const body = { error: faker.random.words() }

export const mockBadRequestError = (method: string, url: RegExp, alias: string = 'request'): void => {
  cy.intercept(
    { method, url },
    { delay: 50, statusCode: 400, body }
  ).as(alias)
}

export const mockServerError = (method: string, url: RegExp, alias: string = 'request'): void => {
  cy.intercept(
    { method, url },
    { delay: 50, statusCode: 500, body }
  ).as(alias)
}

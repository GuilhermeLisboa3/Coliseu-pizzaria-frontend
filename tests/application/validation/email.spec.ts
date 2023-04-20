import { EmailValidation } from '@/application/validation'
import { InvalidFieldError } from '@/application/validation/errors'

import faker from 'faker'

describe('EmailValidation', () => {
  let fieldName: string
  let invalidEmail: string
  let validEmail: string

  beforeAll(() => {
    fieldName = faker.database.column()
    invalidEmail = faker.random.word()
    validEmail = faker.internet.email()
  })

  it('should return error if email is invalid', () => {
    const sut = new EmailValidation(fieldName)

    const error = sut.validate({ [fieldName]: invalidEmail })

    expect(error).toEqual(new InvalidFieldError())
  })

  it('should return undefined if email is empty', () => {
    const sut = new EmailValidation(fieldName)

    const error = sut.validate({ [fieldName]: undefined })

    expect(error).toBeFalsy()
  })

  it('should return undefined if email is valid', () => {
    const sut = new EmailValidation(fieldName)

    const error = sut.validate({ [fieldName]: validEmail })

    expect(error).toBeFalsy()
  })
})

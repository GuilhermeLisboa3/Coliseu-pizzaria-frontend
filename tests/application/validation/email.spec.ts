import { EmailValidation } from '@/application/validation'
import { InvalidFieldError } from '@/application/validation/errors'

import faker from 'faker'

describe('EmailValidation', () => {
  let fieldName: string
  let invalidEmail: string

  beforeAll(() => {
    fieldName = faker.database.column()
    invalidEmail = faker.random.word()
  })

  it('should return error if email is invalid', () => {
    const sut = new EmailValidation(fieldName)

    const error = sut.validate({ [fieldName]: invalidEmail })

    expect(error).toEqual(new InvalidFieldError())
  })
})

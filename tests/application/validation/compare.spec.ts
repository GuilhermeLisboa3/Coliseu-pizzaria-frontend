import { CompareValidation } from '@/application/validation'
import { InvalidFieldError } from '@/application/validation/errors'

import faker from 'faker'

describe('CompareValidation', () => {
  let fieldName: string
  let value: string
  let fieldToCompare: string
  let compareInvalid: string

  beforeAll(() => {
    fieldName = faker.database.column()
    value = faker.database.column()
    fieldToCompare = faker.random.words(2)
    compareInvalid = faker.random.words(4)
  })

  it('should return error if fields are not equal', () => {
    const sut = new CompareValidation(fieldName, fieldToCompare)

    const error = sut.validate({ [fieldName]: value, [fieldToCompare]: compareInvalid })

    expect(error).toEqual(new InvalidFieldError())
  })
})

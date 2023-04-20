import { CompareValidation } from '@/application/validation'
import { InvalidFieldError } from '@/application/validation/errors'

import faker from 'faker'

describe('CompareValidation', () => {
  let fieldName: string
  let value: string
  let fieldToCompare: string
  let compareInvalid: string
  let compareValid: string

  beforeAll(() => {
    fieldName = faker.database.column()
    value = faker.database.column()
    fieldToCompare = faker.random.words(2)
    compareInvalid = faker.random.words(4)
    compareValid = value
  })

  it('should return error if fields are not equal', () => {
    const sut = new CompareValidation(fieldName, fieldToCompare)

    const error = sut.validate({ [fieldName]: value, [fieldToCompare]: compareInvalid })

    expect(error).toEqual(new InvalidFieldError())
  })

  it('should return undefined if fields are equal', () => {
    const sut = new CompareValidation(fieldName, fieldToCompare)

    const error = sut.validate({ [fieldName]: value, [fieldToCompare]: compareValid })

    expect(error).toBeFalsy()
  })
})

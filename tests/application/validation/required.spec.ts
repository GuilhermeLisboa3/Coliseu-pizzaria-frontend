import { RequiredValidation } from '@/application/validation'
import { RequiredFieldError } from '@/application/validation/errors'

import faker from 'faker'

describe('RequiredValidation', () => {
  let fieldName: string
  let value: string

  beforeAll(() => {
    fieldName = faker.database.column()
    value = faker.database.column()
  })

  it('should return error if field is empty', () => {
    const sut = new RequiredValidation('any_value')

    const error = sut.validate({ [fieldName]: '' })

    expect(error).toEqual(new RequiredFieldError())
  })

  it('should return undefined if field is not empty', () => {
    const sut = new RequiredValidation(fieldName)

    const error = sut.validate({ [fieldName]: value })

    expect(error).toBeFalsy()
  })
})

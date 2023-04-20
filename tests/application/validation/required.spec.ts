import { RequiredValidation } from '@/application/validation'
import { RequiredFieldError } from '@/application/validation/errors'

import faker from 'faker'

describe('RequiredValidation', () => {
  let fieldName: string

  beforeAll(() => {
    fieldName = faker.database.column()
  })

  it('should return error if field is empty', () => {
    const sut = new RequiredValidation('any_value')

    const error = sut.validate({ [fieldName]: '' })

    expect(error).toEqual(new RequiredFieldError())
  })
})

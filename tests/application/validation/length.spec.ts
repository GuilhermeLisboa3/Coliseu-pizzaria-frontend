import { LengthValidation } from '@/application/validation'
import { InvalidFieldError } from '@/application/validation/errors'

import faker from 'faker'

describe('LengthValidation', () => {
  let fieldName: string
  let value: string

  beforeAll(() => {
    fieldName = faker.database.column()
    value = faker.random.alpha({ count: 8 })
  })

  it('should return error if value is empty', () => {
    const sut = new LengthValidation(fieldName, 1)

    const error = sut.validate({ [fieldName]: value })

    expect(error).toEqual(new InvalidFieldError())
  })
})

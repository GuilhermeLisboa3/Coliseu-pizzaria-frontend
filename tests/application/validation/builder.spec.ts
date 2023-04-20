import { RequiredValidation, ValidationBuilder } from '@/application/validation'

import faker from 'faker'

describe('ValidationBuilder', () => {
  let fieldName: string

  beforeAll(() => {
    fieldName = faker.database.column()
  })

  it('should return a RequiredValidation if required() is call', () => {
    const validators = ValidationBuilder.of(fieldName).required().build()

    expect(validators).toStrictEqual([new RequiredValidation(fieldName)])
  })
})
